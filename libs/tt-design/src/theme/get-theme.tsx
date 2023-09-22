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
