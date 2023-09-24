import { TopicModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'
import OrganizationResource from '../organization'
import { OpenAI } from 'langchain/llms/openai'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import MessageResource from '../forum-message'
import { openAIConfig } from '@tokentraction/config'
import { GQLErrorHandler } from '@ersanyamarya/apollo-graphql-helper'
import { getSummaryFromTextAndObjective } from '@tokentraction/ai'
const ForumTopicTC = composeMongoose(TopicModel)
const { queries, mutations } = genSchema('ForumTopic', ForumTopicTC)

const model = new OpenAI({
  openAIApiKey: openAIConfig.apiKey,
  temperature: 0.1,
})

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: openAIConfig.apiKey,
})

ForumTopicTC.addFields({
  organizationName: {
    type: 'String',
    resolve: async source => {
      const organization = await OrganizationResource.ResourceModel.findById(source.organizationId)
      return organization.name
    },
  },
})

ForumTopicTC.addResolver({
  kind: 'mutation',
  name: 'topicMessageSummary',
  type: 'String',
  args: {
    topicId: 'MongoID!',
  },
  resolve: async ({ args }) => {
    const { topicId } = args
    const topic = await TopicModel.findById(topicId)
    if (!topic) GQLErrorHandler('Topic not found', 'NOT_FOUND', { location: 'topicMessageSummary', args })
    const messages = await MessageResource.ResourceModel.find({ topicId })
    const messagesText = messages.map(message => message.content).join('\n')
    const summary = await getSummaryFromTextAndObjective(messagesText, { topic: topic.title, model, embeddings })
    return summary
  },
})
export default {
  ResourceTC: ForumTopicTC,
  queries,
  mutations: { ...mutations, topicMessageSummary: ForumTopicTC.getResolver('topicMessageSummary') },
  ResourceModel: TopicModel,
  name: 'Topic',
}
