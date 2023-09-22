import styled from '@emotion/styled'
import { Typography, Box, Button } from '@mui/material'
import { ArrowRight } from 'lucide-react'

const Container = styled(Box)`
  overflow: hidden;
  background: #00174b;
  background-image: url('/bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .section {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .left {
    align-items: start;
    padding: 0 5rem;
    gap: 2rem;
  }
  .right {
    align-items: center;
    gap: 2.75rem;
    padding: 0 5rem;
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

const HeroText = styled(Typography)`
  color: #00174b;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.25rem; /* 162.5% */
  letter-spacing: 0.04rem;
`

const SignUpButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;

  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;

  border-radius: 0.5rem;
  border: 2px solid #fff;
  background: linear-gradient(180deg, rgba(3, 251, 191, 0.57) -51.5%, rgba(45, 70, 200, 0.98) 76.02%);

  :hover {
    border-radius: 0.5rem;
    // border-image: linear-gradient(180deg, rgba(3, 251, 191, 0.57) -51.5%, rgba(45, 70, 200, 0.98) 76.02%);
    border-image: linear-gradient(180deg, rgba(3, 251, 191, 0.57) -51.5%, rgba(45, 70, 200, 0.98) 76.02%) 100%;
    background: #fff;
    color: #2c57c2;
  }
`
export function LandingPage() {
  return (
    <Container>
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
        <SubtitleText variant="h2">Connecting Communities, Powering Progress</SubtitleText>
      </Box>
      <Box className="right section">
        <HeroText variant="h2">Sign In with Confidence: Smart Contracts, Smart Engagement</HeroText>
        <img
          src="/hero.svg"
          alt="Hero image"
          width="100%"
          style={{
            width: '20rem',
          }}
        />
        <SignUpButton variant="contained" color="primary" size="large">
          Sign In as a Participant
          <ArrowRight
            size={100}
            style={{
              width: '2rem',
              height: '2rem',
            }}
          />
        </SignUpButton>
        <SignUpButton variant="contained" color="primary" size="large">
          Sign In as a Organization
          <ArrowRight
            size={100}
            style={{
              width: '2rem',
              height: '2rem',
            }}
          />
        </SignUpButton>
      </Box>
    </Container>
  )
}
