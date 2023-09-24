import { Document, Schema, model } from 'mongoose'
import { SubmissionInterface, SubmissionSchema } from './helper'

const CrowdFundedDataSchema = new Schema({
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

export interface CrowdFundedDataInterface extends Document {
  orgId: string
  name?: string
  description?: string
  amount?: number
  pictureUrl?: string
  submissions?: SubmissionInterface[]
}

export const CrowdFundedDataModel = model<CrowdFundedDataInterface>('CrowdFundedData', CrowdFundedDataSchema)
