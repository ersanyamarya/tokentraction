import { TopicModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'
import OrganizationResource from '../organization'
const ForumTopicTC = composeMongoose(TopicModel)
const { queries, mutations } = genSchema('ForumTopic', ForumTopicTC)

ForumTopicTC.addFields({
  organizationName: {
    type: 'String',
    resolve: async source => {
      const organization = await OrganizationResource.ResourceModel.findById(source.organizationId)
      return organization.name
    },
  },
})
export default {
  ResourceTC: ForumTopicTC,
  queries,
  mutations,
  ResourceModel: TopicModel,
  name: 'Topic',
}
