import Styled from 'styled-components'

export const TopNav = Styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  background: ${prop => prop.theme.primary};
  color: ${prop => prop.theme.primaryFont}
`

export const StyledList = Styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    list-style: none;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
  }
`
