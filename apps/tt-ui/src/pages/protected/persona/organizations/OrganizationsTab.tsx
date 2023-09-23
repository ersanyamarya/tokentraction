import { Button, Stack, TextField, Typography } from '@mui/material'
import { CreateOneOrganizationInput } from '@tokentraction/api-operations'
import { Plus } from 'lucide-react'
import useOrganizationState from './organization-state'
import useForm from '../../../../hooks/useForm'
import { OrganizationsTabProps, defaultDaa } from '.'

export function OrganizationsTab({ persona }: OrganizationsTabProps) {
  const { state, registerField, valueExists } = useForm(defaultDaa)
  const { createOrganization, error, loading, setLoading, orgFormOpen, setOrgFormOpen } = useOrganizationState()
  if (error) return <Typography variant="body1">{error.message}</Typography>
  if (loading) return <Typography variant="body1">Loading...</Typography>

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
        </>
      ) : (
        <>
          <Typography variant="h4">Create Organization</Typography>
          <Typography variant="body1">Create a new organization</Typography>
          <pre>
            <code>{JSON.stringify(state, null, 2)}</code>
          </pre>

          <TextField
            {...registerField('name', {
              showLabel: true,
            })}
          />

          <TextField
            {...registerField('pictureUrl', {
              showLabel: true,
            })}
          />

          <TextField
            {...registerField('website', {
              showLabel: true,
            })}
          />

          <Stack direction="row" gap={2} justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={() => setOrgFormOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={!valueExists(['name', 'pictureUrl', 'website'])}
              onClick={() => createOrganization(state as CreateOneOrganizationInput)}
            >
              Create
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  )
}
