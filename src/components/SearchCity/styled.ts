import styled from 'styled-components'

import {
  Button,
  defaultShadow,
  defaultText,
  positioningFlex,
} from '@src/style/mixins/mixins'

export const FormSearchCity = styled.form`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  })};

  position: relative;
  gap: ${({ theme }) => theme.gap.sizeXS}px;
  width: 300px;
  height: 38px;

  @media ${({ theme }) => theme.media.verySmall} {
    height: 32px;
    width: 230px;
  }
`

export const SearchButton = styled(Button)`
  height: 100%;
  width: 95px;
`

export const InputCity = styled.input`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.paragraph,
    })};

  width: 100%;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;
  border: ${({ theme }) => theme.sizes.border.default}px solid
    ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.gap.sizeXS}px;

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};

    width: 130px;
  }
`

export const CityList = styled.ul`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.medium,
    })}
  ${defaultShadow()}
  
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translateY(38px);
  width: 200px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.gap.sizeXS}px;
  z-index: ${({ theme }) => theme.zIndex.l};

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })}

    width: 130px;
    transform: translateY(32px);
  }
`

export const CityItem = styled.li`
  transition: all ${({ theme }) => theme.durations.ms300}s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    &:first-child {
      border-top-left-radius: ${({ theme }) => theme.gap.sizeXS}px;
      border-top-right-radius: ${({ theme }) => theme.gap.sizeXS}px;
    }
    &:last-child {
      border-bottom-left-radius: ${({ theme }) => theme.gap.sizeXS}px;
      border-bottom-right-radius: ${({ theme }) => theme.gap.sizeXS}px;
    }
  }

  &:active {
    opacity: 0.9;
  }
`

export const CitySelect = styled.button`
  padding: ${({ theme }) => theme.gap.sizeXS}px;
  width: 100%;
`

export const ErrorMessage = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.red,
      fontSize: theme.font.fontSize.medium,
    })};

  position: absolute;
  bottom: ${({ theme }) => theme.gap.sizeXXS}px;
  left: ${({ theme }) => theme.gap.sizeXXS}px;
  transform: ${({ theme }) => `translateY(${theme.gap.sizeL}px)`};
`

export const AdditionalInfo = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.medium,
    })};

  position: absolute;
  bottom: ${({ theme }) => theme.gap.sizeXXS}px;
  left: ${({ theme }) => theme.gap.sizeXXS}px;
  transform: ${({ theme }) => `translateY(${theme.gap.sizeL}px)`};
`
