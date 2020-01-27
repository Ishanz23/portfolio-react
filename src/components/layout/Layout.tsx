import React from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'
import { Container, StyledMain } from '../styled-components/Container'
import { Home } from '../Home'
import { Navbar } from './Navbar'
import { Theme } from '../../models/Theme'

export const Layout = () => {
  const theme: Theme = {
    light: {
      bg: '#e8eaf6',
      mainFont: '#212121',
      primary: '#1a237e',
      primaryFont: '#e8eaf6',
      accent: '#ff1744'
    },
    dark: {
      bg: '#212121',
      mainFont: '#e8eaf6',
      primary: '#673ab7',
      primaryFont: '#e8eaf6',
      accent: '#1de9b6'
    }
  }
  return (
    <ThemeContext.Consumer>
      {({ themeType, toggleTheme }) => {
        return (
          <ThemeProvider theme={theme[themeType]}>
            <Container>
              <Navbar theme={{ themeType, toggleTheme }} />
              <StyledMain color={theme[themeType].mainFont}>
                <Home></Home>
              </StyledMain>
            </Container>
          </ThemeProvider>
        )
      }}
    </ThemeContext.Consumer>
  )
}
