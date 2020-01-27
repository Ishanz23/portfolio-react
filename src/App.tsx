import React, { useState } from 'react'
import { ThemeContext, ThemeContextType } from './contexts/ThemeContext'
import { Layout } from './components/layout/Layout'

const App: React.FC = () => {
  const [state, setstate] = useState<ThemeContextType>({
    themeType: 'dark'
  })
  const toggleTheme = () => {
    console.log('toggleTheme Called')
    setstate({
      themeType: state.themeType === 'dark' ? 'light' : 'dark'
    })
  }
  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>
      <Layout></Layout>
    </ThemeContext.Provider>
  )
}

export default App
