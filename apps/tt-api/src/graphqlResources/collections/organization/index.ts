import { GQLErrorHandler } from '@ersanyamarya/apollo-graphql-helper'
import { OrganizationModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
const OrganizationTC = composeMongoose(OrganizationModel, {})

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
    const { name, description, typeOfOrganization, location, userId } = args
    try {
      return await OrganizationModel.create({
        name,
        description,
        typeOfOrganization,
        location,
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
