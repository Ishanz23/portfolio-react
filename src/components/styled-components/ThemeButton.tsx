import styled from 'styled-components'
import { darken } from 'polished'

export const ThemeButton = styled.button`
  display: flex;
  background: ${props => props.theme.accent};
  padding: 0.75rem;
  margin: 0rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: 2px 2px 2px ${props => darken(0.5, props.theme.accent)};
  transition: all 0.5s ease-out;
  &:hover {
    background: ${props => darken(0.1, props.theme.accent)};
  }
`
