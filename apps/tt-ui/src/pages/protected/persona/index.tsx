import { IconButton, Stack, Typography } from '@mui/material'
import usePersonaState from './persona-state'
import styled from '@emotion/styled'
import { Edit3 } from 'lucide-react'
import { FirstRow } from './FirstRow'

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
  const { persona, editMode, setEditMode } = usePersonaState()
  return (
    <Container>
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
        Manage your profile, wallet and personas
      </Typography>
      {!editMode && <FirstRow {...persona} />}
      <pre>{JSON.stringify({ editMode, persona }, null, 2)}</pre>
    </Container>
  )
}
