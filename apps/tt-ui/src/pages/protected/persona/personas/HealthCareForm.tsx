import { Stack, Typography, Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import useForm from '../../../../hooks/useForm'
import { PersonaQuestion } from '.'

interface HealthCareFormProps {
  setHealthCarePersonaShown: (open: boolean) => void
}
export function HealthCareForm({ setHealthCarePersonaShown }: HealthCareFormProps) {
  const sampleAnswers: Record<string, string | string[]> = {
    interest_in_healthcare_advancements: '',
    preferred_healthcare_sources: [],
    holistic_wellbeing_practices: [],
    healthcare_related_hobbies: [],
    trusted_healthcare_brands: [],
    preferred_healthcare_communities: [],
    healthcare_goals: [],
    preferred_healthcare_information_format: [],
    role_in_healthcare: '',
    healthcare_challenges: [],
  }
  const { state, registerField, valueExists } = useForm(sampleAnswers)
  return (
    <Stack gap={2} justifyContent="stretch" alignItems="stretch" padding={4}>
      <Typography variant="h5">Health Care Persona</Typography>
      <Typography variant="body1">Passionate about healthcare advancements & holistic well-being.</Typography>
      {healthCarePersonaQuestions.map(question => {
        if (question.isMultipleSelect)
          return (
            <FormControl key={question.slug} sx={{ mt: 1.5, width: '100%' }}>
              <InputLabel id={question.slug}>{question.question}</InputLabel>
              <Select variant="filled" fullWidth multiple {...registerField(question.slug, { showLabel: true })}>
                {question.options.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )
        else
          return (
            <TextField
              variant="filled"
              fullWidth
              key={question.slug}
              select={question.isMultipleChoice}
              {...registerField(question.slug, { showLabel: true })}
              label={question.question}
            >
              {question.options.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )
      })}
      <Stack direction="row" gap={2} justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={() => setHealthCarePersonaShown(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!valueExists(Object.keys(sampleAnswers))}
          onClick={() => {
            setHealthCarePersonaShown(false)
            // createOrganization(state as CreateOneOrganizationInput)
          }}
        >
          Create
        </Button>
      </Stack>
    </Stack>
  )
}
const healthCarePersonaQuestions: PersonaQuestion[] = [
  {
    slug: 'interest_in_healthcare_advancements',
    question: 'How interested are you in healthcare advancements?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ['Not interested at all', 'Somewhat interested', 'Very interested'],
    answer: '',
  },
  {
    slug: 'preferred_healthcare_sources',
    question: 'Where do you prefer to get information about healthcare advancements? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Medical journals', 'Health websites', 'Social media', 'News outlets', 'Healthcare professionals'],
    answer: [],
  },
  {
    slug: 'holistic_wellbeing_practices',
    question: 'Do you actively practice holistic well-being approaches? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Yoga', 'Meditation', 'Acupuncture', 'Nutrition', 'Herbal remedies', 'Other'],
    answer: [],
  },
  {
    slug: 'healthcare_related_hobbies',
    question: 'Do you have any hobbies related to healthcare or well-being? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Running', 'Cooking healthy meals', 'Volunteering at healthcare events', 'Fitness training', 'Art therapy'],
    answer: [],
  },
  {
    slug: 'trusted_healthcare_brands',
    question: 'Which healthcare or well-being brands do you trust the most? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Apple', 'Fitbit', 'GNC', "Nature's Way", 'Johnson & Johnson', 'Other'],
    answer: [],
  },
  {
    slug: 'preferred_healthcare_communities',
    question: 'Do you actively participate in online or local healthcare communities? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Health forums', 'Social media groups', 'Local wellness clubs', 'Support groups'],
    answer: [],
  },
  {
    slug: 'healthcare_goals',
    question: 'What are your primary healthcare goals? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Weight management', 'Stress reduction', 'Chronic illness management', 'Lifestyle improvement'],
    answer: [],
  },
  {
    slug: 'preferred_healthcare_information_format',
    question: 'How do you prefer to consume healthcare information? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Articles', 'Videos', 'Podcasts', 'Webinars', 'Infographics'],
    answer: [],
  },
  {
    slug: 'role_in_healthcare',
    question: 'What is your role in the healthcare industry, if any?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ['Patient', 'Caregiver', 'Healthcare professional', 'Other'],
    answer: '',
  },
  {
    slug: 'healthcare_challenges',
    question: 'What healthcare challenges do you face in your life? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Access to healthcare', 'Managing chronic conditions', 'Balancing work and health', 'Information overload'],
    answer: [],
  },
]
