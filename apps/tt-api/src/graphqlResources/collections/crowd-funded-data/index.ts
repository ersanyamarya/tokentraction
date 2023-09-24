import { CrowdFundedDataModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'

const CrowdFundedDataTC = composeMongoose(CrowdFundedDataModel, {})

const { queries, mutations } = genSchema('CrowdFundedData', CrowdFundedDataTC)

export default {
  ResourceTC: CrowdFundedDataTC,
  queries,
  mutations,
  ResourceModel: CrowdFundedDataModel,
  name: 'Persona',
}
