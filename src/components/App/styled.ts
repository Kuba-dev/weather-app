import styled from 'styled-components'

const paddingGap = {
  M: '70px',
}

export const ContainerApp = styled.div`
  width: 1140px;
`

export const WrapperApp = styled.section`
  background-color: ${({ theme }) => theme.colors.translucent};
  backdrop-filter: blur(15px);
  height: 100%;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.gap.size6XL}px ${paddingGap.M} ${theme.gap.size3XL}px`};
`
