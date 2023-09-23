import { logger } from '@ersanyamarya/common-node-utils'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/dist/prompts'
import { OpenAI } from 'langchain/llms/openai'
import { StructuredOutputParser } from 'langchain/output_parsers'
import { parseOutput } from '../../utils'
import { UserPersona, UserPersonaSchema, personaPromptTemplate } from './template'

const parser = StructuredOutputParser.fromZodSchema(UserPersonaSchema)

interface GeneratePersonaInput {
  questions: string
  userProfile: string
  model: OpenAI
}

export type { UserPersona }

export async function generatePersona({ questions, userProfile, model }: GeneratePersonaInput): Promise<UserPersona> {
  logger.info('-------------------> Initializing persona generation <-------------------')
  const formatInstructions = parser.getFormatInstructions()
  const prompt = new PromptTemplate({
    template: personaPromptTemplate,
    inputVariables: ['questions', 'userProfile'],
    partialVariables: { formatInstructions },
  })

  const chain = new LLMChain({ llm: model, prompt })

  const output = await chain.call({
    questions,
    userProfile,
  })

  const parsed = parseOutput<UserPersona>(
    output.text,
    {
      name: '',
      age: 0,
      gender: 'Prefer Not to Say',
      location: '',

      summary: '',
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
