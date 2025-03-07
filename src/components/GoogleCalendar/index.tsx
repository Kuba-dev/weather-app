import { memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import {
  useActions,
  useAuthentication,
  useFetchCalendarLastestEvents,
  useTypedSelector,
} from '@src/hooks'
import { ErrorMessage } from '@src/style/shared'
import { formatGoogleTimeInTime } from '@src/utils/formatGoogleTimeInTime'
import EventItem from '@components/EventItem'
import Loading from '@components/Loading'
import ModalConfirm from '@components/ModalConfirm'

import { AuthActionsWrapper, AuthButton, EventsList, Wrapper } from './styled'

export default memo(function GoogleCalendar() {
  const [modalOpen, setModalOpen] = useState(false)

  const { signIn, signOut, errorAuth, isAuthenticated } = useAuthentication()
  const { fetchLatestEvents, session, isFetching } =
    useFetchCalendarLastestEvents()
  const { events, error, isLoading } = useTypedSelector(
    state => state.calendarEvents,
  )
  const { clearEvents } = useActions()

  const handleClickOnSubmitModal = async () => {
    setModalOpen(false)
    await signOut()
    clearEvents()
  }
  const handleClickSignIn = async () => {
    await signIn()
  }
  const handleOnCanelCloseModal = () => setModalOpen(false)
  const handleClickOpenModal = () => setModalOpen(true)

  const ModalPortal = createPortal(
    <ModalConfirm
      onCancel={handleOnCanelCloseModal}
      onConfirm={handleClickOnSubmitModal}
      textModal='Are you sure you want to log out of your account?'
    />,
    document.body,
  )

  useEffect(() => {
    if (session && !isFetching.current) {
      fetchLatestEvents()
    }
  }, [session, fetchLatestEvents, isFetching])

  return (
    <Wrapper>
      <AuthActionsWrapper>
        {isAuthenticated ? (
          <AuthButton onClick={handleClickOpenModal}>Sign Out</AuthButton>
        ) : (
          <AuthButton onClick={handleClickSignIn}>Sign In</AuthButton>
        )}
        {errorAuth && <ErrorMessage>{errorAuth.message}</ErrorMessage>}
      </AuthActionsWrapper>
      {modalOpen && ModalPortal}

      <EventsList>
        {isLoading && <Loading />}
        {error && <p>{error}</p>}
        {events.map(({ id, summary, start }) => {
          const dateTime =
            (start as { dateTime?: string }).dateTime ||
            (start as { date?: string }).date
          const time = dateTime ? formatGoogleTimeInTime(dateTime) : 'N/A'
          return <EventItem key={id} summury={summary} startTime={time} />
        })}
      </EventsList>
    </Wrapper>
  )
})
