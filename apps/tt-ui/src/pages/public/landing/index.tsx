import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import { Metamask } from './metamask'
const Container = styled(Stack)`
  overflow-x: hidden;
  background: #00174b;
  background-image: url('/bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100vh;
  width: 100vw;

  .section {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    gap: 2rem;
  }
  .left {
    align-items: start;
  }
`

const TitleText = styled(Typography)`
  color: #71f8e0;
  font-size: 5.25rem !important;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0525rem;
`

const SubtitleText = styled(Typography)`
  color: #fff;
  font-size: 2.5rem !important;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05rem;
`

export function LandingPage() {
  return (
    <Container direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
      <Box className="left section">
        <img
          src="/logo.svg"
          alt="Token Traction Logo"
          width="100%"
          height="100%"
          style={{
            width: '10rem',
            height: '10rem',
          }}
        />
        <TitleText variant="h1">Token Traction</TitleText>
        <SubtitleText variant="h2">The pseudonymous network for ventures to power their growth</SubtitleText>
      </Box>
      <Metamask />
    </Container>
  )
}
