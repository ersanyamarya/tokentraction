import styled from '@emotion/styled'
import { Box, Alert, Divider, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import { Edit3 } from 'lucide-react'
import { FirstRow } from './FirstRow'
import usePersonaState from './persona-state'
import { PersonaForm } from './PersonaForm'
import { TTLoader } from '@tokentraction/tt-design'
import { useEffect, useState } from 'react'
import { OrganizationsTab } from './organizations'
import { PersonaTab } from './personas'

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
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
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
      {!editMode ? (
        <>
          <FirstRow {...persona} />
          <br />
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} variant="fullWidth">
                <Tab label="Manage Personas" />
                <Tab label="Manage Organization" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <PersonaTab persona={persona} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <OrganizationsTab persona={persona} />
            </CustomTabPanel>
          </Box>
        </>
      ) : (
        <PersonaForm persona={persona} savePersona={savePersona} />
      )}
    </Container>
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
