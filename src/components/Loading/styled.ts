import { styled } from 'styled-components'

import { Props } from './types'

export const Load = styled.img<Props>`
  z-index: ${({ theme }) => theme.zIndex.load};
  position: absolute;
  top: ${({ position }) => {
    if (position?.top) return `${position.top}px`
    return `50%`
  }};
  left: ${({ position }) => {
    if (position?.left) return `${position.left}px`
    return `50%`
  }};
  bottom: ${({ position }) => {
    if (position?.bottom) return position.bottom
    return ``
  }};
  right: ${({ position }) => {
    if (position?.right) return position.right
    return ``
  }};
  transform: translate(-50%, -50%);
  width: ${({ scale }) => `${scale?.width}px`};
  height: ${({ scale }) => `${scale?.height}px`};
`
