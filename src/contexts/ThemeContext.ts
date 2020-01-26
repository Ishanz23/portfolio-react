import { createContext } from 'react'
import { ThemeType } from '../models/Theme'
export interface ThemeContextType {
  themeType: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  themeType: 'dark',
  toggleTheme: () => {}
})
