import { GQLErrorHandler } from '@ersanyamarya/apollo-graphql-helper'
import { UserModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'

const UserTC = composeMongoose(UserModel, {})

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
}

export default { ResourceTC: UserTC, queries, mutations, ResourceModel: UserModel, name: 'User' }
