import { Button, defaultText, positioningFlex } from '@src/style/mixins/mixins'
import styled from 'styled-components'

export const FormSearchCity = styled.form`
  ${positioningFlex({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  })};

  width: 260px;
`

export const SearchButton = styled(Button)``

export const InputCity = styled.input`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.paragraph,
    })};

  width: 100%;
  margin-bottom: ${({ theme }) => theme.gap.sizeM}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;
  border: ${({ theme }) => theme.sizes.border.default}px solid
    ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.gap.sizeXS}px;
`
