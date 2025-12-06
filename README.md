### 1. We register props typing in the component folder called types.ts, use type. Sample code and structure below.

```
├── Header/
    ├── index.tsx
    ├── styled.ts
    └── types.ts
```

#### Example component

index.tsx

```tsx
import Navigation from '@components/Navigation'

import { HeaderSection, Title } from './styled'

export default function Header() {
  return (
    <HeaderSection>
      <Title>Todo list</Title>
      <Navigation />
    </HeaderSection>
  )
}
```

styled.ts

```ts
import { styled } from 'styled-components'

import { positioningFlex } from '@style/mixins'

import { Props } from './types'
// Here type is used necessarily for typing props in the component

export const HeaderSection = styled.header`
  ...
`

export const Title = styled.h1<Props>`
  ...
`
```

types.ts

```ts
// Here we describe the type and export it to the required file
export type Props = {
  fontWeight?: 200 | 300 | 400 | 500 | 600 | 700
}
```

### 2. When using interfaces for typing, be sure to add the letter "I" at the beginning of the name.

#### Example:

src/style/theme.ts

```ts
import { ITheme } from '../types/iTheme'
// We have a regular theme and to typify it we use an interface
// that we import from the src/types folder, the letter "i" is
// required at the beginning of the name.

export const baseTheme: ITheme = {
  ...
}
```

src/types/iTheme.ts

```ts
// The letter "I" is required at the beginning of the interface name.

export interface ITheme {
  ...
}
```

### 3. Mixin default Text. The default value is specified for the paragraph (font-size: 24, font-weight: 400, color: #FFFFFF(theme.color.font)), if the default value contains the values ​​you need, then we do not specify the values.

#### Example:

```ts
import styled from 'styled-components'

import { defaultText } from '@src/style/mixins'

export const Paragraph = styled.p`
  ${defaultText()}
  //  fontSize = 24,
//  fontWeight = 400,
//  color = '#FFFFFF'

  ...
`
```

### If you need text with other parameters, then take the value from 'theme' and pass them to the mixin

#### Example:

```ts
import styled from 'styled-components'

import { defaultText } from '@style/mixins'

export const Title = styled.h2`
  ${({ theme }) =>
    defaultText({
      fontSize: theme.font.fontSize.title,
      fontWeight: theme.font.fontWeight.bold,
      color: theme.colors.primary,
    })};

  ...
`
```

### 4. If you pass more than 3 props to a component, then we do the destructuring inside the component.

#### Example:

```tsx
import { PropsCheckbox } from './types'

export default function Checkbox(props: PropsCheckbox) {
  const {disabled, label, checked, onChange} = props;
  return (
    ...
  )
}
```
