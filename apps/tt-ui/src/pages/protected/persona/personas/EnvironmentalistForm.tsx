import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { EnumPersonaPersonaType, useUserGeneratePersonaMutation } from '@tokentraction/api-operations'
import { PersonaQuestion } from '.'
import useForm from '../../../../hooks/useForm'
import { useAuth } from '../../../../state'
import { Wand2 } from 'lucide-react'
interface EnvironmentalistFormProps {
  setEnvironmentalistPersonaShown: (open: boolean) => void
  seLoading: (loading: boolean) => void
}
export function EnvironmentalistForm({ setEnvironmentalistPersonaShown, seLoading }: EnvironmentalistFormProps) {
  const { user } = useAuth()
  const [createPersona] = useUserGeneratePersonaMutation({
    refetchQueries: ['PersonaList'],
    onCompleted: data => {
      seLoading(false)
    },
    onError: async error => {
      console.log(error)
      seLoading(false)
    },
  })
  const sampleAnswers: Record<string, string | string[]> = {
    environmental_interest_level: '',
    sustainability_practices: [],
    'favorite_eco-friendly_activities': [],
    trusted_environmental_brands: [],
    environmental_activism: [],
    preferred_environmental_information_sources: [],
    role_in_environmental_work: '',
    environmental_goals: [],
    preferred_environmental_events: [],
    environmental_challenges: [],
  }
  const { state, registerField, valueExists } = useForm(sampleAnswers)
  return (
    <Stack gap={2} justifyContent="stretch" alignItems="stretch" padding={4}>
      <Typography variant="h5">Environmental Enthusiast Persona</Typography>
      <Typography variant="body1"> Passionate about Environment, sustainability and saving the planet</Typography>
      {environmentalPersonaQuestions.map(question => {
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
        <Button variant="contained" color="primary" onClick={() => setEnvironmentalistPersonaShown(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!valueExists(Object.keys(sampleAnswers))}
          endIcon={<Wand2 />}
          onClick={() => {
            seLoading(true)
            setEnvironmentalistPersonaShown(false)
            const questions = environmentalPersonaQuestions.reduce((acc: string, question: PersonaQuestion) => {
              if (question.isMultipleSelect) {
                if (Array.isArray(state[question.slug])) {
                  return acc + question.question + ':' + state[question.slug].join(',') + ';'
                }
              } else {
                return acc + question.question + ':' + state[question.slug] + ';'
              }
              return acc
            }, '')
            createPersona({
              variables: {
                userGeneratePersonaId: user?._id,
                type: EnumPersonaPersonaType.Environmentalist,
                questions,
                theme: 'Environmental Enthusiast Persona',
              },
            })
          }}
        >
          Generate Persona Using AI
        </Button>
      </Stack>
    </Stack>
  )
}
const environmentalPersonaQuestions: PersonaQuestion[] = [
  {
    slug: 'environmental_interest_level',
    question: 'How passionate are you about environmental issues?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ['Not passionate at all', 'Somewhat passionate', 'Very passionate'],
    answer: '',
  },
  {
    slug: 'sustainability_practices',
    question: 'Which sustainable practices do you actively follow or support? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: [
      'Reducing plastic use',
      'Recycling',
      'Composting',
      'Conserving water',
      'Renewable energy',
      'Supporting eco-friendly brands',
    ],
    answer: [],
  },
  {
    slug: 'favorite_eco-friendly_activities',
    question: 'What are your favorite eco-friendly activities or hobbies? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Gardening', 'Hiking', 'Bicycling', 'Participating in clean-up events', 'DIY recycling projects', 'Other'],
    answer: [],
  },
  {
    slug: 'trusted_environmental_brands',
    question: 'Which environmental or sustainable brands do you trust the most? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Patagonia', 'Tesla', 'The Body Shop', 'EcoVessel', "Tom's of Maine", 'Other'],
    answer: [],
  },
  {
    slug: 'environmental_activism',
    question: 'Are you actively involved in environmental activism or advocacy? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: [
      'Volunteering for environmental organizations',
      'Participating in protests',
      'Supporting eco-policy initiatives',
      'Educating others about sustainability',
    ],
    answer: [],
  },
  {
    slug: 'preferred_environmental_information_sources',
    question: 'Where do you prefer to get information about environmental issues? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Environmental blogs', 'Documentaries', 'Social media', 'News outlets', 'Academic research'],
    answer: [],
  },
  {
    slug: 'role_in_environmental_work',
    question: 'What is your role in environmental work, if any?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ['Environmental activist', 'Volunteer', 'Educator', 'Professional in the environmental field', 'Other'],
    answer: '',
  },
  {
    slug: 'environmental_goals',
    question: 'What are your primary environmental goals? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: [
      'Reducing carbon footprint',
      'Promoting wildlife conservation',
      'Advocating for clean energy',
      'Raising awareness about climate change',
    ],
    answer: [],
  },
  {
    slug: 'preferred_environmental_events',
    question: 'Do you actively participate in environmental events or gatherings? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Earth Day celebrations', 'Climate marches', 'Environmental workshops', 'Community clean-up initiatives'],
    answer: [],
  },
  {
    slug: 'environmental_challenges',
    question: 'What environmental challenges concern you the most? (Select all that apply)',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: ['Deforestation', 'Plastic pollution', 'Global warming', 'Loss of biodiversity', 'Water pollution'],
    answer: [],
  },
]
