import { Button, Stack, Typography } from '@mui/material'
import { User } from '@tokentraction/api-operations'
import { Plus } from 'lucide-react'

interface OrganizationsTabProps {
  persona: User
}

export function OrganizationsTab({ persona }: OrganizationsTabProps) {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Your Organizations</Typography>
        <Button variant="contained" color="primary" endIcon={<Plus />}>
          Add Organization
        </Button>
      </Stack>
      <Typography variant="h5">Build and Collaborate: Create and Manage Your Organizations</Typography>
    </div>
  )
}
