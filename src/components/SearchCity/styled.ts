import styled from 'styled-components'

import {
  Button,
  defaultShadow,
  defaultText,
  positioningFlex,
} from '@src/style/mixins/mixins'

const totalSize = {
  size3XL: `300px`,
  size2XL: `230px`,
  sizeXL: `200px`,
  sizeL: `130px`,
  sizeM: `95px`,
  sizeS: `38px`,
  sizeXS: `32px`,
}

export const FormSearchCity = styled.form`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  })};

  position: relative;
  gap: ${({ theme }) => theme.gap.sizeXS}px;
  width: ${totalSize.size3XL};
  height: ${totalSize.sizeS};

  @media ${({ theme }) => theme.media.verySmall} {
    width: ${totalSize.size2XL};
    height: ${totalSize.sizeXS};
  }
`

export const SearchButton = styled(Button)`
  height: 100%;
  width: ${totalSize.sizeM};
`

export const InputCity = styled.input`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.paragraph,
    })};

  width: 100%;
  width: ${totalSize.sizeXL};
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

    width: ${totalSize.sizeL};
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
  transform: ${`translateY(${totalSize.sizeS})`};
  width: ${totalSize.sizeXL};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.gap.sizeXS}px;
  z-index: ${({ theme }) => theme.zIndex.l};

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })}

    width: ${totalSize.sizeL};
    transform: ${`translateY(${totalSize.sizeXS})`};
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
