import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { Frame, PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation, useNavigate, useOutlet } from 'react-router-dom'
const drawerWidth = 320
const pathRegexp = (route: string): RegExp => new RegExp(`${route}.*`)

export function NavBarLayout() {
  const theme = useTheme()
  const location = useLocation()
  const outlet = useOutlet()
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <AppBar elevation={1}>
        <Toolbar>
          <Box component="img" src="/text_logo.svg" alt="Token Traction Logo" height="100%" />
          <Box component="img" src="/avatar.svg" alt="Token Traction Logo" width="80px" />
        </Toolbar>
      </AppBar>
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Token Traction
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton component={NavLink} to="/dashboard" selected={pathRegexp('/dashboard').test(location.pathname)}>
            <ListItemIcon>
              <Frame size={24} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={NavLink} to="/create" selected={pathRegexp('/create').test(location.pathname)}>
            <ListItemIcon>
              <PlusCircleIcon size={24} />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </List>
      </Drawer> */}
      <Box
        component="main"
        sx={{
          flex: 1,
          overflow: 'auto',
        }}
      >
        {outlet}
      </Box>
    </Box>
  )
}
