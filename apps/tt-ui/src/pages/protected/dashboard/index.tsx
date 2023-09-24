import styled from '@emotion/styled'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useTaskListQuery } from '@tokentraction/api-operations'
import { ReactNode } from 'react'
import { CrowdFunded } from './CrowdFunded'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem 4rem;
  gap: 0rem;

  .h1 {
    color: var(--m-3-sys-light-on-primary-container, #00174b);
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.25rem; /* 115.556% */
  }
  .h2 {
    color: #44474e;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem;
  }
`

export function Dashboard() {
  const { data } = useTaskListQuery()
  return (
    <Container>
      <Typography variant="h1" component="h1" className="h1">
        Engagement Hub
      </Typography>
      <Typography variant="h2" component="h2" className="h2">
        Discover and Participate in Tasks Aligned with Your Persona
      </Typography>
      <br />
      <br />
      <CrowdFunded crowdfundeddataList={data?.crowdfundeddataList || []} />
    </Container>
  )
}

interface SectionProps {
  name: string
  viewAllLink: string
  icon: ReactNode
  children: ReactNode
}
export function Section({ name, viewAllLink, icon, children }: SectionProps) {
  return (
    <Stack width={'100%'} gap={4}>
      <Stack direction="row" alignItems="center" justifyContent="space-around" width={'100%'} gap={2}>
        {icon}
        <Typography variant="h4" component="h2">
          {name}
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Button variant="outlined">View All</Button>
      </Stack>
      {children}
    </Stack>
  )
}
