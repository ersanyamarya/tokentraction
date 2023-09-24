import styled from '@emotion/styled'
import { Avatar, Box, Button, Icon, IconButton, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import {
  SortFindManyMessageInput,
  Topic,
  useForummessageCreateMutation,
  useForummessageListQuery,
  useForumtopicListQuery,
  useTaskListQuery,
} from '@tokentraction/api-operations'
import { ReactNode, useState } from 'react'
import { CrowdFunded } from './CrowdFunded'
import { VoiceYourOpinionSection } from './VoiceYourOpinion'
import { UsabilityTestingSection } from './UsablityTesting'
import { Send } from 'lucide-react'
import { useAuth } from '../../../state'

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
        <CustomTabPanel value={value} index={1}>
          <Forum />
        </CustomTabPanel>
      </Box>
    </Container>
  )
}

const StyledTask = styled(Stack)`
  background-color: #fff;
  border-radius: 4px;
  border: 4px solid var(--Logo-gradient, rgba(3, 251, 191, 0.57));
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const ForumContainer = styled(Stack)`
  border: 4px solid var(--Logo-gradient, rgba(3, 251, 191, 0.57));
  padding: 2rem;
  border-radius: 4px;
  width: 100%;
  max-height: 600px;
  overflow-y: scroll;
`

function Forum() {
  const { data } = useForumtopicListQuery({ variables: {} })
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  return (
    <Stack gap={6}>
      <Typography variant="h2" component="h2" className="h2">
        Recent Topics
      </Typography>
      <Stack direction="row" gap={4} flexWrap="wrap">
        {data?.forumtopicList.map(topic => (
          <StyledTask gap={2} padding={2} key={topic._id} onClick={() => setSelectedTopic(topic)}>
            <Typography variant="h5" component="h3">
              Organization:
              {topic.organizationName}
            </Typography>
            <Typography variant="h6" component="h3">
              {topic.title}
            </Typography>
          </StyledTask>
        ))}
      </Stack>
      {selectedTopic && <MessageSection selectedTopic={selectedTopic} />}
    </Stack>
  )
}

const StyledMessage = styled(Stack)`
  background-color: var(--Logo-gradient, rgba(3, 191, 251, 0.1));
  width: 80%;
  align-self: flex-start;
  &.self {
    background-color: var(--Logo-gradient, rgba(3, 251, 191, 0.1));
    border-radius: 4px;
    padding: 1rem;
    align-self: flex-end;
  }
`

interface MessageProps {
  selectedTopic: Topic
}

function MessageSection({ selectedTopic }: MessageProps) {
  const { user } = useAuth()
  const { data } = useForummessageListQuery({
    variables: {
      filter: {
        topicId: selectedTopic._id,
      },
      sort: SortFindManyMessageInput.CreatedatAsc,
    },
  })

  const [toMessage, setToMessage] = useState('')

  const [sendMessage] = useForummessageCreateMutation({
    refetchQueries: ['ForummessageList'],
    onCompleted: () => {
      setToMessage('')
    },
  })
  return (
    <Stack>
      <Typography variant="h2" component="h2" className="h2">
        Topic: {selectedTopic.title}
      </Typography>

      <ForumContainer gap={3}>
        {data?.forummessageList.map(message => (
          <StyledMessage key={message._id} gap={2} padding={2} className={message.userId === user._id ? 'self' : ''}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" width={'100%'} gap={2}>
              <Stack direction="row" alignItems="center" gap={2}>
                <Avatar src={message.userPictureUrl || ''} />
                <Typography variant="body1" component="h3">
                  {message.userFullName}
                </Typography>
              </Stack>
              <Typography variant="body1" component="h3">
                {message.createdAt && dateToPrettyDateAndTime(message.createdAt)}
              </Typography>
            </Stack>
            <Typography variant="h6" component="p">
              {message.content}
            </Typography>
          </StyledMessage>
        ))}
      </ForumContainer>
      <TextField
        id="outlined-basic"
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        value={toMessage}
        onChange={e => {
          setToMessage(e.target.value)
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() =>
                sendMessage({
                  variables: {
                    record: {
                      content: toMessage,
                      topicId: selectedTopic._id,
                      userId: user._id,
                    },
                  },
                })
              }
            >
              <Send />
            </IconButton>
          ),
        }}
      />
    </Stack>
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

const dateToPrettyDateAndTime = (date: string) => {
  const d = new Date(date)
  return d.toLocaleString()
}
