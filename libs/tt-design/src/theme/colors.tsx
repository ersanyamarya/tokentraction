import { PaletteMode, SimplePaletteColorOptions, TypeBackground } from '@mui/material'

export const primary: SimplePaletteColorOptions = {
  main: '#345EC9',
}

export const secondary: SimplePaletteColorOptions = {
  main: '#64EDD5',
}

export const success: SimplePaletteColorOptions = {
  main: '#00635D',
}

export const error: SimplePaletteColorOptions = {
  main: '#FF1654',
}

export const warning: SimplePaletteColorOptions = {
  main: '#FCE762',
}

export const info: SimplePaletteColorOptions = {
  main: '#484ABA',
}

// background
export const background = (mode: PaletteMode): TypeBackground => {
  switch (mode) {
    case 'dark':
      return {
        default: '#121212',
        paper: '#1c1c1c',
      }
    case 'light':
    default:
      return {
        default: '#f5f5f5',
        paper: '#fcfcfc',
      }
  }
}

export const primaryGradient = `linear-gradient(180deg, ${secondary.main} 0%, ${primary.main}  100%)`
