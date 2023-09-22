import styled from '@emotion/styled'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { ArrowBigUp, ArrowBigUpDash, ArrowRightSquare, ArrowUpSquare, Download } from 'lucide-react'
import { useMetaMask } from 'metamask-react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const Container = styled(Box)`
  align-items: center;
  gap: 2rem;
  h2 {
    align-self: stretch;
    color: #00174b;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
    text-align: center;
  }
`

interface HeroMessages {
  [key: string]: {
    message: string
    cta: string
    icon: ReactNode
    disabled?: boolean
  }
}

const heroMessages: HeroMessages = {
  unavailable: {
    message:
      "Hello there, it seems like you haven't connected your wallet yet. To get started, please connect your Metamask wallet.",
    cta: 'Install Wallet',
    icon: <Download />,
    disabled: false,
  },
  notConnected: {
    message:
      "Hello there, it seems like you haven't connected your wallet yet. To get started, please connect your Metamask wallet.",
    cta: 'Connect Wallet',
    icon: <ArrowUpSquare />,
    disabled: false,
  },
  initializing: {
    message: 'Initializing Metamask...',
    cta: 'Initializing...',
    icon: <CircularProgress size={24} thickness={2} color="secondary" />,
    disabled: true,
  },
  connecting: {
    message: 'You should see a Metamask popup, please follow the instructions to connect your wallet.',
    cta: 'Connecting...',
    icon: <CircularProgress size={24} thickness={2} color="secondary" />,
    disabled: true,
  },
  connected: {
    message: 'Hello there, it seems like you are connected your wallet yet. To get started, please go the App',
    cta: 'Go to the App',
    icon: <ArrowRightSquare />,
    disabled: false,
  },
}

export function Metamask() {
  const navigate = useNavigate()
  const { status, connect } = useMetaMask()
  const currentStatus = heroMessages[status]
  return (
    <Container className="section">
      <Typography variant="h2" component="h2">
        "{currentStatus.message}"
      </Typography>
      <Box
        component="img"
        src="/metamask.svg"
        alt="metamask"
        height="100%"
        sx={{
          height: '3.25rem',
        }}
      />
      <p>
        <Button
          disabled={currentStatus.disabled}
          variant="contained"
          color="primary"
          onClick={() => {
            if (currentStatus.disabled) return
            if (status === 'unavailable') {
              window.open('https://metamask.io/download.html', '_blank')
              return
            }

            if (status === 'connected') {
              navigate('/app')
              return
            }
            connect()
          }}
          endIcon={currentStatus.icon}
        >
          {currentStatus.cta}
        </Button>
      </p>
    </Container>
  )
}
