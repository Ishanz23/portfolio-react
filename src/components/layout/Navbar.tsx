import React, { useState } from 'react'
import { StyledList, TopNav } from '../styled-components/TopNav'
import { ThemeContextType } from '../../contexts/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import { StyledHamburger } from './Hamburger'
import { ThemeButton } from '../styled-components/ThemeButton'

export const Navbar = (props: { theme: ThemeContextType }) => {
  const [state, setState] = useState({ drawerOpen: false })

  const toggleSidePanel = () => {
    setState({
      drawerOpen: !state.drawerOpen
    })
  }
  return (
    <TopNav>
      <h2>Sayantan Dey</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <ThemeButton onClick={props.theme.toggleTheme}>
          {props.theme.themeType === 'dark' ? <FaMoon /> : <FaSun />}
        </ThemeButton> */}
        <div style={{ margin: '0rem 1.5rem', display: 'flex' }} onClick={props.theme.toggleTheme}>
          {props.theme.themeType === 'dark' ? <FaMoon /> : <FaSun />}
        </div>
        <StyledHamburger open={state.drawerOpen} toggleSidePanel={toggleSidePanel}></StyledHamburger>
      </div>
      <StyledList open={state.drawerOpen}>
        <li>About</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </StyledList>
    </TopNav>
  )
}
