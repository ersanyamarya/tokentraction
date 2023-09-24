import { Box, Button, Dialog, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import { Organization, User, useForumtopicCreateMutation, useForumtopicListQuery } from '@tokentraction/api-operations'
import { BookCopy, Plus, Wand2 } from 'lucide-react'
import { useState } from 'react'
import { OrgForm } from './OrgForm'
import useOrganizationState from './organization-state'
import useForm from '../../../../hooks/useForm'
interface OrganizationsTabProps {
  persona: User
}

export function OrganizationsTab({ persona }: OrganizationsTabProps) {
  const { orgFormOpen, setOrgFormOpen } = useOrganizationState()
  return (
    <Stack gap={2} justifyContent="stretch" alignItems="stretch">
      {!orgFormOpen ? (
        <>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Your Organizations</Typography>
            <Button variant="contained" color="primary" endIcon={<Plus />} onClick={() => setOrgFormOpen(true)}>
              Add Organization
            </Button>
          </Stack>
          <Typography variant="h5">Build and Collaborate: Create and Manage Your Organizations</Typography>
          <Typography variant="body1">
            Organizations are the building blocks of the Token Traction platform. Organizations are used to build and
            collaborate on projects. Organizations are also used to create and manage your own communities.
          </Typography>
          <Stack gap={8}>
            {persona.organizations?.map(org => (
              <OrganizationCard org={org} key={org._id} />
            ))}
          </Stack>
        </>
      ) : (
        <OrgForm setOrgFormOpen={setOrgFormOpen} />
      )}
    </Stack>
  )
}

interface OrganizationCardProps {
  org: Organization
}

function OrganizationCard({ org }: OrganizationCardProps) {
  const { state, registerField, valueExists } = useForm({})
  const [openTopicForm, setOpenTopicForm] = useState(false)
  const { data } = useForumtopicListQuery({ variables: { filter: { organizationId: org._id } } })

  const [createForumTopic] = useForumtopicCreateMutation({
    refetchQueries: ['ForumtopicList'],
    onCompleted: () => {
      setOpenTopicForm(false)
    },
  })
  return (
    <Stack
      key={org.name}
      gap={1}
      sx={{
        p: 4,
        borderRadius: '4px',
        border: ' 4px solid var(--Logo-gradient, rgba(3, 251, 191, 0.57))',
      }}
    >
      <Typography variant="h5">
        Organization Name: {org.name} -- {org._id}
      </Typography>
      <Box
        component="img"
        src={org.pictureUrl || ''}
        sx={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      />
      <Typography variant="body1">{org.description}</Typography>
      <Typography variant="body1">Topics:</Typography>
      <List>
        {data?.forumtopicList?.map(topic => (
          <ListItem key={topic._id}>{topic.title}</ListItem>
        ))}
      </List>
      <Stack direction="row" alignItems="center" gap={2}>
        <Button variant="contained">Create Task</Button>
        <Button variant="contained" endIcon={<BookCopy />} onClick={() => setOpenTopicForm(true)}>
          Create Forum Topic
        </Button>
        <Button variant="contained" endIcon={<Wand2 />} disabled>
          Create Topic using AI
        </Button>
      </Stack>
      <Dialog open={openTopicForm} onClose={() => setOpenTopicForm(false)}>
        <Stack
          gap={2}
          sx={{
            padding: '4rem 2rem',

            borderRadius: '0.5rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            backgroundColor: '#fff',
            border: '4px solid var(--Logo-gradient, rgba(3, 251, 191, 0.57))',
            width: '32rem',
          }}
        >
          <Typography variant="h4" component="h3">
            Create Forum Topic
          </Typography>
          <TextField fullWidth {...registerField('title', { showLabel: true })} label="Title" />
          <Stack direction="row" gap={2} justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              disabled={!valueExists(['title'])}
              onClick={() => {
                console.log({
                  title: state.title,
                  organizationId: org._id,
                })

                createForumTopic({
                  variables: {
                    record: {
                      title: state.title,
                      organizationId: org._id,
                    },
                  },
                })
              }}
            >
              Create
            </Button>
          </Stack>
        </Stack>
      </Dialog>
      {/* <Stack direction="row" alignItems="center" gap={2}>
        {['MEMBER 1', 'MEMBER 2'].map(member => (
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            key={member}
            sx={{
              backgroundColor: '#f3f3f3',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '4px',
              padding: '1rem',
            }}
          >
            <Avatar sx={{ width: 56, height: 56 }} />
            <Typography variant="h6">{member}</Typography>
          </Stack>
        ))}
      </Stack> */}
    </Stack>
  )
}
