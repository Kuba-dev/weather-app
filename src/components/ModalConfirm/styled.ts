import { Button, defaultText, positioningFlex } from '@style/mixins/mixins'
import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  ${defaultText({})}
  ${positioningFlex({
    flexDirection: 'column',
    justifyContent: 'normal',
    alignItems: 'normal',
  })}

  width: 400px;
  height: 230px;
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;
  gap: ${({ theme }) => theme.gap.size4XL}px;
  border: ${({ theme }) =>
    `${theme.sizes.border.default}px solid ${theme.colors.secondary}`};
  backdrop-filter: ${({ theme }) => `blur(${theme.gap.sizeM}px)`};
`

export const TextModal = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
    })}

  text-align: center;
  margin-top: ${({ theme }) => theme.gap.size4XL}px;
`

export const ActionsOnModal = styled.div`
  ${positioningFlex({ justifyContent: 'space-around' })}
`

export const ButtonNo = styled(Button)``

export const ButtonYes = styled(Button)``
