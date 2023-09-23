import { PersonaModel } from '@tokentraction/mongodb'
import { composeMongoose } from 'graphql-compose-mongoose'
import genSchema from '../../schemaGenerator'

const PersonaTC = composeMongoose(PersonaModel, {})

const { queries, mutations } = genSchema('Persona', PersonaTC)

export default {
  ResourceTC: PersonaTC,
  queries,
  mutations,
  ResourceModel: PersonaModel,
  name: 'Persona',
}
