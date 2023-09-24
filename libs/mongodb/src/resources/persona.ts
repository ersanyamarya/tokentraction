import { Document, Schema, model } from 'mongoose'

export const PersonaSchema = new Schema(
  {
    personaType: {
      type: String,
      required: true,
      enum: ['HealthCare', 'Environmentalist', 'Entrepreneur'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    age: Number,
    gender: String,
    location: String,
    needs: [String],
    goals: [String],
    painPoints: [String],
    expectations: [String],
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
)

export interface PersonaInterface extends Document {
  personaType: string
  userId: string
  name?: string
  age?: number
  gender?: string
  location?: string
  summary?: string
  needs?: string[]
  goals?: string[]
  painPoints?: string[]
  expectations?: string[]
}

export const PersonaModel = model<PersonaInterface>('Persona', PersonaSchema)
