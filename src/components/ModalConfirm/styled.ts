import styled from 'styled-components'

import { Button, defaultText, positioningFlex } from '@style/mixins/mixins'

const modalSize = {
  XXL: `400px`,
  XL: `350px`,
  L: `250px`,
  M: `230px`,
  S: `200px`,
  XS: `170px`,
}

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

  width: ${modalSize.XXL};
  height: ${modalSize.M};
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;
  gap: ${({ theme }) => theme.gap.size4XL}px;
  border: ${({ theme }) =>
    `${theme.sizes.border.default}px solid ${theme.colors.secondary}`};
  backdrop-filter: ${({ theme }) => `blur(${theme.gap.sizeM}px)`};

  @media ${({ theme }) => theme.media.medium} {
    width: ${modalSize.XL};
    height: ${modalSize.S};
    gap: ${({ theme }) => theme.gap.size3XL}px;
  }

  @media ${({ theme }) => theme.media.verySmall} {
    width: ${modalSize.L};
    height: ${modalSize.XS};
  }
`

export const TextModal = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
    })}

  text-align: center;
  margin-top: ${({ theme }) => theme.gap.size4XL}px;

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        fontSize: theme.font.fontSize.medium,
        color: theme.colors.primary,
      })}

    margin-top: ${({ theme }) => theme.gap.sizeXL}px;
  }
`

export const ActionsOnModal = styled.div`
  ${positioningFlex({ justifyContent: 'space-around' })}
`

export const ButtonNo = styled(Button)``

export const ButtonYes = styled(Button)``
