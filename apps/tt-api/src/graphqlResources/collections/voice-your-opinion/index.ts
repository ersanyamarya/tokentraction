import { VoiceYourOpinionModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'
import OrganizationResource from '../organization'
const VoiceYourOpinionTC = composeMongoose(VoiceYourOpinionModel, {})

const { queries, mutations } = genSchema('VoiceYourOpinion', VoiceYourOpinionTC)

VoiceYourOpinionTC.addFields({
  organizationName: {
    type: 'String',
    resolve: async source => {
      const organization = await OrganizationResource.ResourceModel.findById(source.orgId)
      return organization.name
    },
  },
})

export default {
  ResourceTC: VoiceYourOpinionTC,
  queries,
  mutations,
  ResourceModel: VoiceYourOpinionModel,
  name: 'Persona',
}
