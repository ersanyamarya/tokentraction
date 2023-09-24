import { logger } from '@ersanyamarya/common-node-utils'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'
import { getRetrievalChain } from '../../utils'

const summarizeTemplatePrompt = `I want the following document to be summarized with context: {topic}.
The summary should be at least 500 words long.
Don't skip any important details. Keep the names of any people, places, things or companies mentioned in the document.
`
const promptTemplate = new PromptTemplate({
  template: summarizeTemplatePrompt,
  inputVariables: ['topic'],
})

export interface SummarizeInputType {
  topic: string
  model: OpenAI
  embeddings: OpenAIEmbeddings
}

export async function getSummaryFromTextAndObjective(
  text: string,
  { topic, model, embeddings }: SummarizeInputType
): Promise<string> {
  logger.info('----------------- Summarize: Starting ----------------- ')
  const chain = await getRetrievalChain(model, text, embeddings)
  const query = await promptTemplate.format({ topic })
  const res = await chain.call({
    query,
  })
  logger.info('----------------- Summarize: Done ----------------- ')
  return res.text
}
