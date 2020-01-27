import styled from 'styled-components'
import { darken } from 'polished'

export const TopNav = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  z-index: 9;
  background: ${prop => prop.theme.primary};
  color: ${prop => prop.theme.primaryFont};
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  box-shadow: 0px 2px 4px ${prop => darken(0.4, prop.theme.bg)};
  transition: all 0.5s ease-out;
`

export const StyledList = styled.ul<{ open: boolean }>`
  position: fixed;
  top: 8vh;
  right: 0;
  width: 60%;
  height: 92vh;
  background: ${props => darken(0.2, props.theme.primary)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  box-shadow: -3px 4px 4px ${props => (props.open ? darken(0.1, props.theme.bg) : 'transparent')};
  transition: all 0.5s ease-in-out;
  transform: translateX(${props => (props.open ? '0%' : '100%')});
  li {
    list-style: none;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
`
