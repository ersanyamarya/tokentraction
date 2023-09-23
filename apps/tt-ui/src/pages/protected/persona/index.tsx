import styled from '@emotion/styled'
import { Alert, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Edit3 } from 'lucide-react'
import { FirstRow } from './FirstRow'
import usePersonaState from './persona-state'
import { PersonaForm } from './PersonaForm'
import { TTLoader } from '@tokentraction/tt-design'
import { useEffect, useState } from 'react'

const Container = styled(Stack)`
  padding: 2rem;
  .heading {
    color: #00174b;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.25rem;
  }
  .subheading {
    color: #00174b;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem;
  }
`

export function PersonaPage() {
  const { persona, editMode, setEditMode, savePersona, loading, error } = usePersonaState()
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (error) {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 10000)
    }
  }, [error, setEditMode])
  if (error && showAlert) return <Alert severity="error">{error.message}</Alert>
  if (loading) return <TTLoader />
  return (
    <Container gap={1}>
      <Typography
        component="h1"
        className="heading"
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Hello! {persona.displayName}
        <span
          style={{
            flex: 1,
          }}
        />
        <IconButton onClick={() => setEditMode(!editMode)} color="secondary" aria-label="edit persona">
          <Edit3 size={32} color="#00174b" />
        </IconButton>
      </Typography>

      <Typography component="h2" className="subheading">
        {editMode ? 'Edit your Profile' : '  Manage your profile, wallet and personas'}
      </Typography>
      <Divider />
      {!editMode ? <FirstRow {...persona} /> : <PersonaForm persona={persona} savePersona={savePersona} />}
    </Container>
  )
}
