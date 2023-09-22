import { createTheme, PaletteMode, responsiveFontSizes, Theme } from '@mui/material'
import type {} from '@mui/x-data-grid/themeAugmentation'
import { background, error, info, primary, secondary, success, warning } from './colors'
const fontFamily = ['Josefin Sans', 'sans-serif'].join(',')
const getTheme = (mode: PaletteMode): Theme => {
  let theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary,
        secondary,
        background: background(mode),
        success,
        error,
        warning,
        info,
      },
      typography: {
        fontFamily,
      },
    })
  )
  theme = createTheme(theme, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          // for different sizes
          root: {
            borderRadius: '0.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1.375rem',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '1.75rem',
          },
          contained: {
            border: '2px solid #fff',
            background: 'linear-gradient(180deg, rgba(3, 251, 191, 0.57) -51.5%, rgba(45, 70, 200, 0.98) 76.02%)',
            ':hover': {
              border: '2.5px solid transparent',
              background: '#fff',
              color: '#2c57c2',
              backgroundImage: 'linear-gradient(180deg, rgba(3, 251, 191, 0.57) -51.5%, rgba(45, 70, 200, 0.98) 76.02%)',
              backgroundOrigin: 'border-box',
              boxShadow: 'inset 0 100vw white',
            },
          },
          outlined: {
            border: '2px solid #fff',
            background: 'transparent',
            color: '#fff',
            ':hover': {
              border: '2px solid #fff',
              background: 'linear-gradient(180deg, rgba(3, 251, 191, 0.57) -51.5%, rgba(45, 70, 200, 0.98) 76.02%)',
              color: '#fff',
            },
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: 'primary',
          position: 'static',
        },
        styleOverrides: {
          root: {
            boxShadow: 'none',
            '& *': {
              color: theme.palette.primary.contrastText,
            },
          },
        },
      },
      MuiToolbar: {
        defaultProps: {
          variant: 'regular',
        },
        styleOverrides: {
          root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        },
      },
      MuiDrawer: {
        defaultProps: {
          variant: 'permanent',
          anchor: 'left',
          color: 'primary',
        },
        styleOverrides: {
          root: {
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          },
          paper: {
            width: 'inherit',
            height: 'inherit',
            backgroundColor: 'primary.dark',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          InputLabelProps: {
            shrink: true,
          },
        },
        styleOverrides: {
          root: {
            marginTop: '1.2rem',
          },
        },
      },
      MuiDataGrid: {
        defaultProps: {
          autoHeight: true,
          initialState: {
            pagination: {
              paginationModel: {
                pageSize: 15,
                page: 0,
              },
            },
          },
          pageSizeOptions: [10, 15, 20, 25, 30, 35, 40, 45, 50],
          checkboxSelection: true,
          disableRowSelectionOnClick: true,
          density: 'compact',
          disableColumnMenu: true,
          disableColumnSelector: true,
          showCellVerticalBorder: true,
          showColumnVerticalBorder: true,
        },
        styleOverrides: {
          root: {},
          columnHeader: {
            backgroundColor: theme.palette.secondary.light,
          },
        },
      },
    },
  })
  return theme
}

export { fontFamily, getTheme }
