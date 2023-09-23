import { Stack, Typography, Button, Dialog } from '@mui/material'
import { User } from '@tokentraction/api-operations'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { HealthCareForm } from './HealthCareForm'
import { EnvironmentalistForm } from './EnvironmentalistForm'

interface PersonaTabProps {
  persona: User
}

export function PersonaTab({ persona }: PersonaTabProps) {
  const [healthCarePersonaShown, setHealthCarePersonaShown] = useState(false)
  const [environmentalistPersonaShown, setEnvironmentalistPersonaShown] = useState(false)

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
      <Dialog open={healthCarePersonaShown} onClose={() => setHealthCarePersonaShown(false)} fullScreen>
        <HealthCareForm setHealthCarePersonaShown={setHealthCarePersonaShown} />
      </Dialog>
      <Dialog open={environmentalistPersonaShown} onClose={() => setEnvironmentalistPersonaShown(false)} fullScreen>
        <EnvironmentalistForm setEnvironmentalistPersonaShown={setEnvironmentalistPersonaShown} />
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
