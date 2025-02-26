import styled from 'styled-components'

const paddingGap = {
  M: '70px',
}

export const ContainerApp = styled.div`
  width: 1140px;
`

export const WrapperApp = styled.div`
  background-color: ${({ theme }) => theme.colors.translucent};
  backdrop-filter: blur(15px);
  height: 675px;
  width: 100%;
  padding-left: ${paddingGap.M};
  padding-right: ${paddingGap.M};
  padding-top: ${({ theme }) => theme.gap.size6XL}px;
  padding-bottom: ${({ theme }) => theme.gap.size3XL}px;
`

export const Main = styled.main`
  width: 100%;
`
