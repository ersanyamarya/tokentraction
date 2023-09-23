import { GQLErrorHandler } from '@ersanyamarya/apollo-graphql-helper'
import { OrganizationModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import UserResource from '../user'
import { schemaComposer } from 'graphql-compose'
const OrganizationTC = composeMongoose(OrganizationModel, {})

const OrganizationAllMembers = schemaComposer.createObjectTC({
  name: 'OrganizationAllMembers',
  fields: {
    user: 'User',
    role: 'String',
  },
})

OrganizationTC.addFields({
  members: {
    type: [OrganizationAllMembers],
    resolve: async ({ members }) => {
      const userIds = members.map(member => member.user)
      const users = await UserResource.ResourceModel.find({ _id: { $in: userIds } })
      return users.map(user => ({ user, role: members.find(member => member.user === user._id).role }))
    },
  },
})

OrganizationTC.addResolver({
  kind: 'query',
  name: 'organizationList',
  type: ['Organization'],
  args: {
    userId: 'MongoID',
  },
  resolve: async ({ args }) => {
    const { userId } = args
    const organizations = await OrganizationModel.find({ 'members.user': userId })
    if (!organizations) GQLErrorHandler('Organizations not found', 'NOT_FOUND', { location: 'organizationList', args })
    return organizations
  },
})
OrganizationTC.mongooseResolvers.createOne()
OrganizationTC.addResolver({
  kind: 'mutation',
  name: 'organizationCreate',
  type: 'Organization',
  args: {
    record: 'CreateOneOrganizationInput!',
    userId: 'MongoID!',
  },
  resolve: async ({ args }) => {
    const { record, userId } = args
    try {
      return await OrganizationModel.create({
        ...record,
        members: [{ user: userId, role: 'Admin' }],
      })
    } catch (err) {
      GQLErrorHandler('Error creating organization', 'UNKNOWN', { location: 'organizationCreate', args, err })
    }
  },
})

const queries = {
  organizationList: OrganizationTC.getResolver('organizationList'),
}

const mutations = {
  organizationCreate: OrganizationTC.getResolver('organizationCreate'),
}

export default { ResourceTC: OrganizationTC, queries, mutations, ResourceModel: OrganizationModel, name: 'Organization' }
