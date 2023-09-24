import styled from '@emotion/styled'
import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useTaskListQuery } from '@tokentraction/api-operations'
import { ReactNode, useState } from 'react'
import { CrowdFunded } from './CrowdFunded'
import { VoiceYourOpinionSection } from './VoiceYourOpinion'
import { UsabilityTestingSection } from './UsablityTesting'

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
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Container>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Typography variant="h1" component="h1" className="h1">
        Engagement Hub
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab label="Tasks" />
            <Tab label="Community Forum" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Stack gap={6}>
            <CrowdFunded crowdfundeddataList={data?.crowdfundeddataList || []} />
            <VoiceYourOpinionSection voiceYourOpinionList={data?.voiceyouropinionList || []} />
            <UsabilityTestingSection usabilityTestingList={data?.usabilitytestingList || []} />
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}></CustomTabPanel>
      </Box>
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

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
