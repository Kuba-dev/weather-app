import EventItem from '@components/EventItem'
import Loading from '@components/Loading'
import ModalConfirm from '@components/ModalConfirm'
import { useActions } from '@src/hooks/useActions'
import { useAuthentication } from '@src/hooks/useAuthentication'
import { useCalendarEvents } from '@src/hooks/useCalendarEvents'
import { useFetchCalendarLastestEvents } from '@src/hooks/useFetchCalendarLastestEvents'
import { ErrorMessage } from '@src/style/shared'
import { formatGoogleTimeInTime } from '@src/utils/formatGoogleTimeInTime'
import { memo, useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { AuthActionsWrapper, AuthButton, EventsList, Wrapper } from './styled'

export default memo(function GoogleCalendar() {
  const [modalOpen, setModalOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { signIn, signOut, errorAuth, supabase } = useAuthentication()
  const { fetchLatestEvents, session, isFetching } =
    useFetchCalendarLastestEvents()
  const {
    events: { events, error, isLoading },
  } = useCalendarEvents()
  const { clearEvents } = useActions()

  const handleClickOnSubmitModal = () => {
    setModalOpen(false)
    signOut()
    clearEvents()
    setIsAuthenticated(false)
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

  const checkAuthStatus = useCallback(async () => {
    const { data } = await supabase.auth.getSession()
    setIsAuthenticated(Boolean(data.session))
  }, [supabase])

  useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])

  useEffect(() => {
    if (session && !isFetching.current) {
      fetchLatestEvents()
    }
  }, [session, fetchLatestEvents, isFetching])

  return (
    <Wrapper>
      <AuthActionsWrapper>
        <AuthButton disabled={isAuthenticated} onClick={signIn}>
          Sign In
        </AuthButton>
        <AuthButton disabled={!isAuthenticated} onClick={handleClickOpenModal}>
          Sign Up
        </AuthButton>
        {errorAuth && <ErrorMessage>{errorAuth}</ErrorMessage>}
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
