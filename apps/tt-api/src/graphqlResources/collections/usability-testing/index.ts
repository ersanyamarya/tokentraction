import { UsabilityTestingModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'

const UsabilityTestingTC = composeMongoose(UsabilityTestingModel, {})

const { queries, mutations } = genSchema('UsabilityTesting', UsabilityTestingTC)

export default {
  ResourceTC: UsabilityTestingTC,
  queries,
  mutations,
  ResourceModel: UsabilityTestingModel,
  name: 'Persona',
}
