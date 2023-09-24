import { Document, Schema, model } from 'mongoose'
import { SubmissionInterface, SubmissionSchema } from './helper'

const UsabilityTestingSchema = new Schema({
  orgId: {
    type: Schema.Types.ObjectId,
    ref: 'Organization',
  },
  name: String,
  description: String,
  amount: Number,
  pictureUrl: String,
  submissions: [SubmissionSchema],
})

export interface UsabilityTestingInterface extends Document {
  orgId: string
  name?: string
  description?: string
  amount?: number
  pictureUrl?: string
  submissions?: SubmissionInterface[]
}

export const UsabilityTestingModel = model<UsabilityTestingInterface>('UsabilityTesting', UsabilityTestingSchema)
