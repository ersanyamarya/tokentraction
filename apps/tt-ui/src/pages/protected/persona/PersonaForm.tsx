import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import {
  EnumUserAccessibilityNeeds,
  EnumUserEducation,
  EnumUserEmploymentIndustry,
  EnumUserEmploymentStatus,
  EnumUserGender,
  EnumUserHealthStatus,
  EnumUserHouseholdIncome,
  EnumUserInterests,
  EnumUserLanguages,
  EnumUserMaritalStatus,
  EnumUserPoliticalAffiliation,
  EnumUserSkills,
  EnumUserTechSkills,
  EnumUserVeteranStatus,
  EnumUserWorkExperience,
  User,
} from '@tokentraction/api-operations'
import useForm from '../../../hooks/useForm'

interface PersonaFormProps {
  persona: User
  savePersona: (persona: User) => void
}

export function PersonaForm({ persona, savePersona }: PersonaFormProps) {
  const { state, registerField } = useForm(persona)

  return (
    <Stack
      gap={2}
      justifyContent="stretch"
      alignItems="stretch"
      sx={{
        width: 'min(100%, 800px)',
      }}
    >
      <TextField
        {...registerField('displayName', {
          showLabel: true,
        })}
      />
      <TextField
        {...registerField('pictureUrl', {
          showLabel: true,
        })}
      />

      <Stack direction="row" gap={4} alignItems="center">
        <TextField
          fullWidth
          type="number"
          {...registerField('age', {
            showLabel: true,
          })}
        />
        <TextField
          fullWidth
          select
          {...registerField('gender', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserGender).map((key: string) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </TextField>
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Languages</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('languages', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumUserLanguages).map((key: string) => (
              <MenuItem key={key} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Stack direction="row" gap={4}>
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
      <Stack direction="row" gap={4}>
        <TextField
          fullWidth
          select
          {...registerField('maritalStatus', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserMaritalStatus).map((key: string) => (
            <MenuItem key={key} value={EnumUserMaritalStatus[key as keyof typeof EnumUserMaritalStatus]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          type="number"
          {...registerField('householdSize', {
            showLabel: true,
          })}
        />
        <TextField
          fullWidth
          select
          {...registerField('householdIncome', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserHouseholdIncome).map((key: string) => (
            <MenuItem key={key} value={EnumUserHouseholdIncome[key as keyof typeof EnumUserHouseholdIncome]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Stack direction="row" gap={4}>
        <TextField
          fullWidth
          select
          {...registerField('employmentStatus', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserEmploymentStatus).map((key: string) => (
            <MenuItem key={key} value={EnumUserEmploymentStatus[key as keyof typeof EnumUserEmploymentStatus]}>
              {key}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          select
          {...registerField('employmentIndustry', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserEmploymentIndustry).map((key: string) => (
            <MenuItem key={key} value={EnumUserEmploymentIndustry[key as keyof typeof EnumUserEmploymentIndustry]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Stack direction="row" gap={4}>
        <TextField
          fullWidth
          {...registerField('religion', {
            showLabel: true,
          })}
        />
        <TextField
          fullWidth
          select
          {...registerField('politicalAffiliation', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserPoliticalAffiliation).map((key: string) => (
            <MenuItem key={key} value={EnumUserPoliticalAffiliation[key as keyof typeof EnumUserPoliticalAffiliation]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Stack direction="row" gap={4}>
        <TextField
          fullWidth
          select
          {...registerField('accessibilityNeeds', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserAccessibilityNeeds).map((key: string) => (
            <MenuItem key={key} value={EnumUserAccessibilityNeeds[key as keyof typeof EnumUserAccessibilityNeeds]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          {...registerField('healthStatus', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserHealthStatus).map((key: string) => (
            <MenuItem key={key} value={EnumUserHealthStatus[key as keyof typeof EnumUserHealthStatus]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          {...registerField('veteranStatus', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserVeteranStatus).map((key: string) => (
            <MenuItem key={key} value={EnumUserVeteranStatus[key as keyof typeof EnumUserVeteranStatus]}>
              {key}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Stack direction="row" gap={4}>
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Skills</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('skills', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumUserSkills).map((key: string) => (
              <MenuItem key={key} value={EnumUserSkills[key as keyof typeof EnumUserSkills]}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Technical Skills</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('techSkills', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumUserTechSkills).map((key: string) => (
              <MenuItem key={key} value={EnumUserTechSkills[key as keyof typeof EnumUserTechSkills]}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Stack direction="row" gap={4}>
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Education</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('education', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumUserEducation).map((key: string) => (
              <MenuItem key={key} value={EnumUserEducation[key as keyof typeof EnumUserEducation]}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 1.5, width: '100%' }}>
          <InputLabel>Work Experience</InputLabel>
          <Select
            fullWidth
            multiple
            {...registerField('workExperience', {
              showLabel: true,
            })}
          >
            {Object.keys(EnumUserWorkExperience).map((key: string) => (
              <MenuItem key={key} value={EnumUserWorkExperience[key as keyof typeof EnumUserWorkExperience]}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <FormControl sx={{ mt: 1.5, width: '100%' }}>
        <InputLabel>Interests</InputLabel>
        <Select
          fullWidth
          multiple
          {...registerField('interests', {
            showLabel: true,
          })}
        >
          {Object.keys(EnumUserInterests).map((key: string) => (
            <MenuItem key={key} value={EnumUserInterests[key as keyof typeof EnumUserInterests]}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => {
          const stateNew = getCleanState(state)

          savePersona(stateNew as User)
        }}
      >
        Save
      </Button>
    </Stack>
  )
}
function getCleanState(state: Record<string, any>) {
  const stateNew = { ...state }
  delete stateNew.__typename
  delete stateNew._id
  delete stateNew.createdAt
  delete stateNew.updatedAt
  delete stateNew.organizations
  stateNew.age = Number(stateNew.age)
  stateNew.householdSize = Number(stateNew.householdSize)
  return stateNew
}
