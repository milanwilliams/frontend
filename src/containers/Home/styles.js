import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #a51c30;
    text-align: center;
  }
`

export const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 5em;
`

export const Header2 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 3em;
`

export const buttonStyle = props => `
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 2em;
  color: ${props => (props.primary ? 'white' : '#a51c30')};
  background-color: ${props => (props.primary ? 'white' : '#a51c30')};
`
