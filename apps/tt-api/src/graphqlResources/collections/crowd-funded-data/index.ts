import { CrowdFundedDataModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'
import OrganizationResource from '../organization'

const CrowdFundedDataTC = composeMongoose(CrowdFundedDataModel, {})

const { queries, mutations } = genSchema('CrowdFundedData', CrowdFundedDataTC)

CrowdFundedDataTC.addFields({
  organizationName: {
    type: 'String',
    resolve: async source => {
      const organization = await OrganizationResource.ResourceModel.findById(source.orgId)
      return organization.name
    },
  },
})

export default {
  ResourceTC: CrowdFundedDataTC,
  queries,
  mutations,
  ResourceModel: CrowdFundedDataModel,
  name: 'Persona',
}
