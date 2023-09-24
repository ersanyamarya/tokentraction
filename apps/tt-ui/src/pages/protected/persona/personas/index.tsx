import { Stack, Typography, Button, Dialog, List, ListItem } from '@mui/material'
import { User, usePersonaListQuery } from '@tokentraction/api-operations'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { HealthCareForm } from './HealthCareForm'
import { EnvironmentalistForm } from './EnvironmentalistForm'
import { TTLoader } from '@tokentraction/tt-design'
import { useAuth } from '../../../../state'

interface PersonaTabProps {
  persona: User
}

export function PersonaTab({ persona }: PersonaTabProps) {
  const { user } = useAuth()
  const [healthCarePersonaShown, setHealthCarePersonaShown] = useState(false)
  const [environmentalistPersonaShown, setEnvironmentalistPersonaShown] = useState(false)
  const [loading, setLoading] = useState(false)

  const { data } = usePersonaListQuery({
    variables: {
      filter: {
        userId: user?._id,
      },
    },
  })

  if (loading) return <TTLoader />

  return (
    <Stack gap={2} justifyContent="stretch" alignItems="stretch">
      <Typography variant="h4">Your Personas</Typography>

      <Typography variant="h5">
        Tailor Your Profile with Personas to optimize your task recommendations and elevate your Token Traction experience
      </Typography>
      <Typography variant="body1">
        Personas are the building blocks of the Token Traction platform. Personas assures psuedo-anonymity and allows you to
        tailor your profile to optimize your task recommendations and elevate your Token Traction experience.
      </Typography>
      <Stack direction="row" gap={2} flexWrap={'wrap'}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Plus />}
          onClick={() => setHealthCarePersonaShown(!healthCarePersonaShown)}
        >
          Add Health care Persona
        </Button>
        <Button variant="contained" color="primary" endIcon={<Plus />} onClick={() => setEnvironmentalistPersonaShown(true)}>
          Add Environmental Persona
        </Button>
      </Stack>
      <Stack gap={2} justifyContent="stretch" alignItems="stretch" direction="row" flexWrap="wrap">
        {data?.personaList?.map(persona => {
          return (
            <Stack key={persona._id} sx={{ border: '1px solid #ccc', borderRadius: '4px', p: 2, mt: 2 }}>
              <Typography variant="h5">{persona.personaType}</Typography>
              <Typography variant="h6">Needs:</Typography>
              <List>
                {persona?.needs?.map(item => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
              <Typography variant="h6">Goals:</Typography>
              <List>
                {persona?.goals?.map(item => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
              <Typography variant="h6">Pain Points:</Typography>
              <List>
                {persona?.painPoints?.map(item => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
              <Typography variant="h6">Expectations:</Typography>
              <List>
                {persona?.expectations?.map(item => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Stack>
          )
        })}
      </Stack>
      <Dialog open={healthCarePersonaShown} onClose={() => setHealthCarePersonaShown(false)} fullScreen>
        <HealthCareForm setHealthCarePersonaShown={setHealthCarePersonaShown} seLoading={setLoading} />
      </Dialog>
      <Dialog open={environmentalistPersonaShown} onClose={() => setEnvironmentalistPersonaShown(false)} fullScreen>
        <EnvironmentalistForm setEnvironmentalistPersonaShown={setEnvironmentalistPersonaShown} seLoading={setLoading} />
      </Dialog>
    </Stack>
  )
}

export interface PersonaQuestion {
  slug: string
  question: string
  isMultipleChoice: boolean
  isMultipleSelect: boolean
  options: string[]
  answer: string | string[]
}
