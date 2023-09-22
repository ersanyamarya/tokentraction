import styled from '@emotion/styled'
import { Box, Button, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem 4rem;
  gap: 0rem;

  h1 {
    color: var(--m-3-sys-light-on-primary-container, #00174b);
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.25rem; /* 115.556% */
  }
  h2 {
    color: #44474e;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem;
  }
`

export function Dashboard() {
  return (
    <Container>
      <Typography variant="h1" component="h1">
        Engagement Hub
      </Typography>
      <Typography variant="h2" component="h2">
        Discover and Participate in Tasks Aligned with Your Persona
      </Typography>
      <br />
      <br />
      <Section
        name="Crowd Funded Data"
        viewAllLink="/dashboard"
        icon={
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 4.125C12.7531 4.125 5.5 8.35313 5.5 13.75V30.25C5.5 35.6469 12.7531 39.875 22 39.875C31.2469 39.875 38.5 35.6469 38.5 30.25V13.75C38.5 8.35313 31.2469 4.125 22 4.125ZM35.75 22C35.75 23.65 34.3922 25.3344 32.0375 26.6234C29.3734 28.0844 25.8156 28.875 22 28.875C18.1844 28.875 14.6266 28.0844 11.9625 26.6234C9.60781 25.3344 8.25 23.65 8.25 22V19.1469C11.1891 21.7078 16.1906 23.375 22 23.375C27.8094 23.375 32.8109 21.7078 35.75 19.1469V22ZM32.0375 34.8734C29.3734 36.3344 25.8156 37.125 22 37.125C18.1844 37.125 14.6266 36.3344 11.9625 34.8734C9.60781 33.5844 8.25 31.9 8.25 30.25V27.3969C11.1891 29.9578 16.1906 31.625 22 31.625C27.8094 31.625 32.8109 29.9578 35.75 27.3969V30.25C35.75 31.9 34.3922 33.5844 32.0375 34.8734Z"
              fill="url(#paint0_linear_87_57931)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_87_57931"
                x1="22"
                y1="4.125"
                x2="22"
                y2="39.875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#03FBBF" stop-opacity="0.57" />
                <stop offset="1" stop-color="#2D46C8" stop-opacity="0.98" />
              </linearGradient>
            </defs>
          </svg>
        }
      >
        <Box>Project Cards</Box>
      </Section>
    </Container>
  )
}

interface SectionProps {
  name: string
  viewAllLink: string
  icon: ReactNode
  children: ReactNode
}
function Section({ name, viewAllLink, icon, children }: SectionProps) {
  return (
    <Box width={'100%'}>
      <Stack direction="row" alignItems="center" justifyContent="space-around" width={'100%'} gap={2}>
        {icon}
        <Typography variant="h2" component="h2">
          {name}
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Button variant="outlined">View All</Button>
      </Stack>
      {children}
    </Box>
  )
}
