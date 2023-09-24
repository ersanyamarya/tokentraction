import { GQLErrorHandler } from '@ersanyamarya/apollo-graphql-helper'
import { openAIConfig } from '@tokentraction/config'
import { PersonaModel, UserModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { OpenAI } from 'langchain/llms/openai'
import OrganizationResource from '../organization'
import { generatePersona } from '@tokentraction/ai'
const UserTC = composeMongoose(UserModel, {})

const model = new OpenAI({
  openAIApiKey: openAIConfig.apiKey,
  temperature: 0.1,
})

const chatModel = new ChatOpenAI({
  openAIApiKey: openAIConfig.apiKey,
  temperature: 0.3,
  modelName: 'gpt-3.5-turbo',
})

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: openAIConfig.apiKey,
})

UserTC.addResolver({
  kind: 'mutation',
  name: 'userGeneratePersona',
  type: 'Persona',
  args: {
    id: 'MongoID!',
    type: 'EnumPersonaPersonaType!',
    questions: 'String!',
    theme: 'String',
  },
  resolve: async ({ args }) => {
    const { id, type, questions, theme } = args
    const user = await UserModel.findById(id)
    if (!user) GQLErrorHandler('User not found', 'NOT_FOUND', { location: 'userGeneratePersona', args })
    const userProfile = JSON.stringify(user.toJSON())
    const personaFromAI = await generatePersona({ questions, userProfile, theme, model })
    const persona = PersonaModel.create({ ...personaFromAI, personaType: type, userId: user._id })
    return persona
  },
})

UserTC.addRelation('organizations', {
  resolver: () => OrganizationResource.ResourceTC.mongooseResolvers.findMany(),
  prepareArgs: {
    filter: source => ({
      members: {
        $elemMatch: {
          user: source._id,
        },
      },
    }),
  },
  projection: { _id: true },
})

UserTC.addResolver({
  kind: 'query',
  name: 'userConnectWallet',
  type: 'User',
  args: {
    walletAddress: 'String!',
  },
  resolve: async ({ args }) => {
    const { walletAddress } = args
    const user = await UserModel.findOne({ walletAddress })
    if (!user) GQLErrorHandler('User not found', 'NOT_FOUND', { location: 'userConnectWallet', args })
    return user
  },
})

UserTC.addResolver({
  kind: 'mutation',
  name: 'userCreate',
  type: 'User',
  args: {
    walletAddress: 'String!',
    displayName: 'String!',
    pictureUrl: 'String',
  },
  resolve: async ({ args }) => {
    const { walletAddress, displayName, pictureUrl } = args
    const user = await UserModel.create({ walletAddress, displayName, pictureUrl })
    return user
  },
})

UserTC.mongooseResolvers.updateOne()

UserTC.addResolver({
  kind: 'mutation',
  name: 'userUpdate',
  type: 'User',
  args: {
    id: 'MongoID!',
    record: 'UpdateOneUserInput!',
  },
  resolve: async ({ args }) => {
    const { id, record } = args
    const user = await UserModel.findByIdAndUpdate(id, record, { new: true })
    if (!user) GQLErrorHandler('User not found', 'NOT_FOUND', { location: 'userUpdate', args })
    return user
  },
})

const queries = {
  userConnectWallet: UserTC.getResolver('userConnectWallet'),
}

const mutations = {
  userCreate: UserTC.getResolver('userCreate'),
  userUpdate: UserTC.getResolver('userUpdate'),
  userGeneratePersona: UserTC.getResolver('userGeneratePersona'),
}

export default { ResourceTC: UserTC, queries, mutations, ResourceModel: UserModel, name: 'User' }
