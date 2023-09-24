import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { CrowdFundedDataSubmissions } from '@tokentraction/api-operations'
import useForm from '../../../../hooks/useForm'

interface FormProps {
  submissions: Array<CrowdFundedDataSubmissions>
}

export function FormSubmissions({ submissions }: FormProps) {
  const { state, registerField, valueExists } = useForm({})
  return (
    <Stack
      gap={2}
      sx={{
        padding: '4rem 2rem',

        borderRadius: '0.5rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#fff',
        border: '4px solid var(--Logo-gradient, rgba(3, 251, 191, 0.57))',
        width: '32rem',
      }}
    >
      <Typography variant="h4" component="h3">
        Submissions
      </Typography>
       <Typography variant="body1">Participating will sign a smart contract that will award you Traction Tokens</Typography>
      <Typography variant="body2">Please fill out the form below to participate</Typography>
      {submissions.map(question => {
        if (question.isMultipleSelect)
          return (
            <FormControl key={question.slug} sx={{ mt: 1.5, width: '100%' }}>
              <InputLabel id={question.slug}>{question.question}</InputLabel>
              <Select variant="filled" fullWidth multiple {...registerField(question.slug, { showLabel: true })}>
                {question?.options?.map(option => (
                  <MenuItem key={option} value={option}>
                    {option || 'N/A'}
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
              {question?.options?.map(option => (
                <MenuItem key={option} value={option}>
                  {option || 'N/A'}
                </MenuItem>
              ))}
            </TextField>
          )
      })}
      <Stack direction="row" gap={2} justifyContent="flex-end">


        <Button variant="contained" color="primary">
          Participate
        </Button>
      </Stack>
    </Stack>
  )
}
