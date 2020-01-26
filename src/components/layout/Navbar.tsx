import React from 'react'
import { StyledList, TopNav } from '../styled-components/StyledNav'
import { ThemeContextType } from '../../contexts/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export const Navbar = (props: { theme: ThemeContextType }) => {
  return (
    <TopNav>
      <h2>Sayantan Dey</h2>
      <StyledList>
        <li>About</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
        <li onClick={props.theme.toggleTheme}>{props.theme.themeType == 'dark' ? <FaMoon /> : <FaSun />}</li>
      </StyledList>
    </TopNav>
  )
}
