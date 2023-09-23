import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { Wand2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useOutlet } from 'react-router-dom'
import { useAuth } from '../state'
import { TTLoader } from '@tokentraction/tt-design'
const drawerWidth = 320
const pathRegexp = (route: string): RegExp => new RegExp(`${route}.*`)

export function NavBarLayout() {
  const { displayName, pictureUrl, walletAddress, createUser, error, loading, setLoading } = useAuth()
  const [formName, setFormName] = useState('')
  const [formPictureUrl, setFormPictureUrl] = useState('')

  const navigate = useNavigate()
  const outlet = useOutlet()
  const [openNewUserDialog, setOpenNewUserDialog] = useState(false)

  useEffect(() => {
    if (error && error?.graphQLErrors[0]?.extensions?.code === 'NOT_FOUND') {
      setOpenNewUserDialog(true)
    }
  }, [error])

  const handleClose = () => {
    setOpenNewUserDialog(false)
    navigate('/')
  }

  const handleCreateUser = async () => {
    setLoading(true)
    await createUser({
      variables: {
        walletAddress,
        displayName: formName,
        pictureUrl: formPictureUrl,
      },
    })
    setOpenNewUserDialog(false)
  }
  return (
    <>
      {loading ? (
        <TTLoader />
      ) : (
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
              <Tooltip title={displayName}>
                <IconButton onClick={() => navigate('/profile')}>
                  <Avatar sx={{ marginLeft: 'auto' }} src={pictureUrl} />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>

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
      )}
      <Dialog open={openNewUserDialog} onClose={handleClose}>
        <Stack
          direction="column"
          gap="2rem"
          padding="4rem 2rem"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundImage: "url('/dialog-bg.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '*': {
              color: 'white',
            },
          }}
        >
          <Typography variant="h5" component="h2" textAlign="center">
            Welcome to Token Traction! It's a pleasure to have you here. Ready to begin your journey? We do not store any of
            your personal information, so you will connect your wallet to get started.
          </Typography>

          <TextField
            onChange={e => setFormName(e.target.value)}
            value={formName}
            margin="dense"
            color="secondary"
            label="Display Name"
            fullWidth
            variant="outlined"
            helperText="This is the name that will be displayed to other users. Choose wisely!"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setFormName(getRandomName())}>
                    <Wand2 />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            onChange={e => setFormPictureUrl(e.target.value)}
            value={formPictureUrl}
            margin="dense"
            color="secondary"
            label="Profile Picture URL"
            fullWidth
            variant="outlined"
            helperText="This is the URL of the display picture of your persona. Get a link from your favorite image hosting service."
          />

          <Typography variant="body2" component="h2" color="secondary">
            Wallet Address: {walletAddress}
          </Typography>

          <Button onClick={handleClose} variant="contained" fullWidth>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleCreateUser} fullWidth>
            Create Account
          </Button>
        </Stack>
      </Dialog>
    </>
  )
}
const alienFirstNames = ['Zorgon', 'Xelara', 'Quixtar', 'Vorblax', 'Nexul', 'Zytron', 'Kryzax', 'Gloptor', 'Ylthar', 'Jexor']

const alienLastNames = [
  'Blorgon',
  'Xyphos',
  'Zyklon',
  'Vorplix',
  'Nexulon',
  'Zytrix',
  'Kryzaron',
  'Gloptor',
  'Yltharix',
  'Jexorin',
]

const getRandomName = () => {
  const firstName = alienFirstNames[Math.floor(Math.random() * alienFirstNames.length)]
  const lastName = alienLastNames[Math.floor(Math.random() * alienLastNames.length)]
  return `${firstName} ${lastName}`
}
