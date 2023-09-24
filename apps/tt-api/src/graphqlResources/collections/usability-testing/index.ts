import { UsabilityTestingModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'
import OrganizationResource from '../organization'
const UsabilityTestingTC = composeMongoose(UsabilityTestingModel, {})

const { queries, mutations } = genSchema('UsabilityTesting', UsabilityTestingTC)

UsabilityTestingTC.addFields({
  organizationName: {
    type: 'String',
    resolve: async source => {
      const organization = await OrganizationResource.ResourceModel.findById(source.orgId)
      return organization.name
    },
  },
})

export default {
  ResourceTC: UsabilityTestingTC,
  queries,
  mutations,
  ResourceModel: UsabilityTestingModel,
  name: 'Persona',
}
