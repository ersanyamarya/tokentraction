import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import {
  CreateOneOrganizationInput,
  EnumOrganizationIndustry,
  EnumOrganizationSize,
  EnumOrganizationTechStack,
  EnumOrganizationTypeOfOrganization,
} from '@tokentraction/api-operations'
import useForm from '../../../../hooks/useForm'
import useOrganizationState from './organization-state'
export const defaultDaa: CreateOneOrganizationInput = {
  name: '',
  description: null,
  pictureUrl: null,
  website: null,
  typeOfOrganization: [],
  industry: [],
  techStack: [],
  size: null,
  country: null,
  state: null,
  city: null,
}

interface OrgFormProps {
  setOrgFormOpen: (open: boolean) => void
}
export function OrgForm({ setOrgFormOpen }: OrgFormProps) {
  const { state, registerField, valueExists } = useForm(defaultDaa)
  const { createOrganization, error, loading } = useOrganizationState()
  if (error) return <Typography variant="body1">{error.message}</Typography>
  if (loading) return <Typography variant="body1">Loading...</Typography>

  return (
    <>
      {/* <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre> */}

      <Typography variant="h4">Create Organization</Typography>
      <Typography variant="body1">Create a new organization</Typography>
      <Stack direction="row" gap={4} alignItems="center">
        <TextField
          fullWidth
          {...registerField('name', {
            showLabel: true,
          })}
        />
        <TextField
          fullWidth
          select
          {...registerField('size', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumOrganizationSize).map((key: string) => (
            <MenuItem key={key} value={EnumOrganizationSize[key as keyof typeof EnumOrganizationSize]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <TextField
          fullWidth
          {...registerField('country', {
            showLabel: true,
          })}
        />
        <TextField
          fullWidth
          {...registerField('state', {
            showLabel: true,
          })}
        />
        <TextField
          fullWidth
          {...registerField('city', {
            showLabel: true,
          })}
        />
      </Stack>
      <TextField
        multiline
        rows={4}
        {...registerField('description', {
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
      <Stack direction="row" gap={4} alignItems="center">
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Type of Organization</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('typeOfOrganization', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumOrganizationTypeOfOrganization).map((key: string) => (
              <MenuItem
                key={key}
                value={EnumOrganizationTypeOfOrganization[key as keyof typeof EnumOrganizationTypeOfOrganization]}
              >
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Industry</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('industry', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumOrganizationIndustry).map((key: string) => (
              <MenuItem key={key} value={EnumOrganizationIndustry[key as keyof typeof EnumOrganizationIndustry]}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Tech Stack</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('techStack', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumOrganizationTechStack).map((key: string) => (
              <MenuItem key={key} value={EnumOrganizationTechStack[key as keyof typeof EnumOrganizationTechStack]}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Stack direction="row" gap={2} justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={() => setOrgFormOpen(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!valueExists(['name', 'pictureUrl', 'website', 'typeOfOrganization'])}
          onClick={() => {
            setOrgFormOpen(false)
            createOrganization(state as CreateOneOrganizationInput)
          }}
        >
          Create
        </Button>
      </Stack>
    </>
  )
}
