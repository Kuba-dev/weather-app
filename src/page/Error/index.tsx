import { useNavigate } from 'react-router-dom'

import { Title } from '@src/style/shared'

import { BackButton, Container } from './styled'

export default function ErrorPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(0)
  }

  return (
    <Container>
      <Title>It seems something went wrong...</Title>
      <Title style={{ marginTop: 20 }}>
        {' '}
        // del We apologize for the inconvenience
      </Title>
      <BackButton onClick={handleClick}>Update page</BackButton>
    </Container>
  )
}
