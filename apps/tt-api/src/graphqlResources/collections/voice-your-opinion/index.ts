import { VoiceYourOpinionModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'

const VoiceYourOpinionTC = composeMongoose(VoiceYourOpinionModel, {})

const { queries, mutations } = genSchema('VoiceYourOpinion', VoiceYourOpinionTC)

export default {
  ResourceTC: VoiceYourOpinionTC,
  queries,
  mutations,
  ResourceModel: VoiceYourOpinionModel,
  name: 'Persona',
}
