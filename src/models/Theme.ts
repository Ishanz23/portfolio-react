export interface Theme {
  light: ThemeProperties
  dark: ThemeProperties
}

export interface ThemeProperties {
  bg: string
  mainFont: string
  primary: string
  primaryFont: string
  accent: string
  accentFont: string
}

export type ThemeType = 'light' | 'dark'
