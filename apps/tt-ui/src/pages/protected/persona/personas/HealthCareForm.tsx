import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { EnumPersonaPersonaType, useUserGeneratePersonaMutation } from '@tokentraction/api-operations'
import { PersonaQuestion } from '.'
import useForm from '../../../../hooks/useForm'
import { useAuth } from '../../../../state'
import { Wand2 } from 'lucide-react'

interface HealthCareFormProps {
  setHealthCarePersonaShown: (open: boolean) => void
  seLoading: (loading: boolean) => void
}
export function HealthCareForm({ setHealthCarePersonaShown, seLoading }: HealthCareFormProps) {
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
    interests: [],
    chronic_conditions: [],
    goals: [],
    information_sources: [],
    pain_points: [],
    expectations: [],
    technology_usage: '',
    feedback: '',
    sharing_experience: '',
    support_others: '',
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
          endIcon={<Wand2 />}
          onClick={() => {
            seLoading(true)
            setHealthCarePersonaShown(false)
            const questions = healthCarePersonaQuestions.reduce((acc: string, question: PersonaQuestion) => {
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
                type: EnumPersonaPersonaType.HealthCare,
                questions,
                theme: 'Health Care Persona',
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
const healthCarePersonaQuestions: PersonaQuestion[] = [
  {
    slug: 'interests',
    question: 'What aspects of healthcare are you most passionate about?',
    isMultipleChoice: false,
    isMultipleSelect: true,
    options: [
      'Holistic well-being',
      'Medical research and advancements',
      'Patient advocacy',
      'Alternative therapies',
      'Chronic condition management',
      'Mental health support',
      'Healthcare technology',
      'Nutrition and fitness',
      'Disease prevention',
    ],
    answer: [],
  },
  {
    slug: 'chronic_conditions',
    question: 'Do you currently suffer from any chronic conditions or severe diseases?',
    isMultipleChoice: true,
    isMultipleSelect: true,
    options: [
      'Yes, I have one or more chronic conditions',
      "No, I don't have any chronic conditions",
      "I'd rather not disclose",
    ],
    answer: [],
  },
  {
    slug: 'goals',
    question: 'What are your primary goals related to healthcare and well-being?',
    isMultipleChoice: false,
    isMultipleSelect: true,
    options: [
      'Improve my overall health',
      'Better manage my chronic condition',
      'Stay informed about healthcare advancements',
      'Support others facing health challenges',
      'Explore alternative treatments',
      'Enhance my mental well-being',
      'Stay active and fit',
      'Prevent future health issues',
    ],
    answer: [],
  },
  {
    slug: 'information_sources',
    question: 'Where do you typically seek healthcare information?',
    isMultipleChoice: false,
    isMultipleSelect: true,
    options: [
      'Medical professionals',
      'Online health forums and communities',
      'Books and research papers',
      'Social media',
      'Holistic health practitioners',
      'Family and friends',
      'Healthcare news websites',
      'Mobile apps',
    ],
    answer: [],
  },
  {
    slug: 'pain_points',
    question: 'What are the biggest challenges or pain points you face in your healthcare journey?',
    isMultipleChoice: false,
    isMultipleSelect: true,
    options: [
      'Access to specialized healthcare',
      'Managing treatment costs',
      'Information overload',
      'Lack of emotional support',
      'Side effects of medications',
      'Difficulty finding trustworthy health information',
      'Long waiting times for appointments',
      'Staying motivated for self-care',
    ],
    answer: [],
  },
  {
    slug: 'expectations',
    question: 'What do you expect from healthcare-related products or services?',
    isMultipleChoice: false,
    isMultipleSelect: true,
    options: [
      'Effectiveness in improving health',
      'Affordability',
      'Ease of use',
      'Access to personalized advice',
      'Comprehensive disease management tools',
      'Community support features',
      'Regular updates on medical advancements',
      'Privacy and data security',
    ],
    answer: [],
  },
  {
    slug: 'technology_usage',
    question: 'How comfortable are you with using healthcare-related technology?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ['Very comfortable', 'Somewhat comfortable', 'Not very comfortable', 'Not comfortable at all'],
    answer: '',
  },
  {
    slug: 'feedback',
    question: 'Would you be willing to provide feedback to improve healthcare services and products?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ["Yes, I'd be happy to provide feedback", 'No, I prefer not to provide feedback'],
    answer: '',
  },
  {
    slug: 'sharing_experience',
    question: 'Are you willing to share your healthcare journey or experiences with others?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ["Yes, I'm open to sharing my experiences", "No, I'd rather keep my experiences private"],
    answer: '',
  },
  {
    slug: 'support_others',
    question: 'Would you be interested in supporting others who are facing similar health challenges?',
    isMultipleChoice: true,
    isMultipleSelect: false,
    options: ["Yes, I'd like to support others", 'No, I prefer not to get involved in supporting others'],
    answer: '',
  },
]
