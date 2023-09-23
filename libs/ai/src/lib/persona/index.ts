import { logger } from '@ersanyamarya/common-node-utils'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/prompts'
import { OpenAI } from 'langchain/llms/openai'
import { StructuredOutputParser } from 'langchain/output_parsers'
import { parseOutput } from '../../utils'
import { UserPersona, UserPersonaSchema, personaPromptTemplate } from './template'

const parser = StructuredOutputParser.fromZodSchema(UserPersonaSchema)

interface GeneratePersonaInput {
  questions: string
  userProfile: string
  theme: string
  model: OpenAI
}

export type { UserPersona }

export async function generatePersona({ questions, userProfile, theme, model }: GeneratePersonaInput): Promise<UserPersona> {
  logger.info('-------------------> Initializing persona generation <-------------------')
  const formatInstructions = parser.getFormatInstructions()
  const prompt = new PromptTemplate({
    template: personaPromptTemplate,
    inputVariables: ['questions', 'userProfile', 'theme'],
    partialVariables: { formatInstructions },
  })

  const chain = new LLMChain({ llm: model, prompt })

  const output = await chain.call({
    questions,
    userProfile,
    theme,
  })

  const parsed = parseOutput<UserPersona>(
    output.text,
    {
      name: '',
      age: 0,
      gender: 'Prefer Not to Say',
      location: '',
      needs: [],
      goals: [],
      painPoints: [],
      expectations: [],
    },
    model,
    parser
  )

  return parsed
}
