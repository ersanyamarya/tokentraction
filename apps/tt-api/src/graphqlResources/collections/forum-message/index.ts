import { MessageModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'
import UserResource from '../user'
import TopicResource from '../forum-topic'
const MessageTopicTC = composeMongoose(MessageModel)
const { queries, mutations } = genSchema('ForumMessage', MessageTopicTC)

MessageTopicTC.addFields({
  topicTitle: {
    type: 'String',
    resolve: async source => {
      const topic = await TopicResource.ResourceModel.findById(source.topicId)
      return topic.title
    },
  },
  userFullName: {
    type: 'String',
    resolve: async source => {
      const user = await UserResource.ResourceModel.findById(source.userId)
      return user.displayName
    },
  },
  userPictureUrl: {
    type: 'String',
    resolve: async source => {
      const user = await UserResource.ResourceModel.findById(source.userId)
      return user.pictureUrl
    },
  },
})

export default {
  ResourceTC: MessageTopicTC,
  queries,
  mutations,
  ResourceModel: MessageModel,
  name: 'Message',
}
