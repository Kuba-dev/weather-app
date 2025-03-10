import { styled } from 'styled-components'

export const Load = styled.img`
  z-index: ${({ theme }) => theme.zIndex.load};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`
