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

import {
  AuthActionsWrapper,
  AuthButton,
  EventsList,
  Title,
  Wrapper,
} from './styled'

export default memo(function GoogleCalendar() {
  const [modalOpen, setModalOpen] = useState(false)

  const { signIn, signOut } = useAuthentication()
  const { fetchLatestEvents, session, isFetching } =
    useFetchCalendarLastestEvents()
  const { events, error, isLoading } = useTypedSelector(
    state => state.calendarEvents,
  )
  const { isAuthenticated, authenticatedError } = useTypedSelector(
    state => state.stateAuthenticated,
  )
  const { clearEvents, clearError } = useActions()

  const handleClickOnSubmitModal = async () => {
    setModalOpen(false)
    await signOut()
    clearError()
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

  const handleClickRefreshEvents = async () => {
    if (session && !isFetching.current) {
      await fetchLatestEvents()
    }
  }

  useEffect(() => {
    if (session && !isFetching.current) {
      fetchLatestEvents()
    }
  }, [session, fetchLatestEvents, isFetching])

  return (
    <Wrapper>
      <AuthActionsWrapper>
        {isAuthenticated ? (
          <>
            <AuthButton onClick={handleClickOpenModal}>Sign Out</AuthButton>
            <AuthButton onClick={handleClickRefreshEvents}>
              Refresh Events
            </AuthButton>
          </>
        ) : (
          <AuthButton onClick={handleClickSignIn}>Sign In</AuthButton>
        )}
        {authenticatedError && (
          <ErrorMessage>{authenticatedError.message}</ErrorMessage>
        )}
      </AuthActionsWrapper>
      {modalOpen && ModalPortal}

      <EventsList>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {!isAuthenticated && !error && (
              <Title>Login to your account to see your events</Title>
            )}
            {!events.length &&
              !isLoading &&
              isAuthenticated &&
              isFetching.current &&
              !error && <Title>There are no events today.</Title>}
            {events.map(({ id, summary, start }) => {
              const dateTime =
                (start as { dateTime?: string }).dateTime ||
                (start as { date?: string }).date
              const time = dateTime ? formatGoogleTimeInTime(dateTime) : 'N/A'
              return <EventItem key={id} summury={summary} startTime={time} />
            })}
          </>
        )}
      </EventsList>
    </Wrapper>
  )
})
