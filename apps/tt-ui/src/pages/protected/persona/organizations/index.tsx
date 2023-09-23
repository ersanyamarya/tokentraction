import { Button, Stack, Typography } from '@mui/material'
import { User } from '@tokentraction/api-operations'
import { Plus } from 'lucide-react'
import { OrgForm } from './OrgForm'
import useOrganizationState from './organization-state'

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
        </>
      ) : (
        <OrgForm setOrgFormOpen={setOrgFormOpen} />
      )}
    </Stack>
  )
}
