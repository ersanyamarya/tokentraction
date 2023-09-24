import { Document, Schema, model } from 'mongoose'
import { SubmissionInterface, SubmissionSchema } from './helper'
const VoiceYourOpinionSchema = new Schema({
  orgId: {
    type: Schema.Types.ObjectId,
    ref: 'Organization',
  },
  name: String,
  surveyTopics: [String],
  amount: Number,
  pictureUrl: String,
  submissions: [SubmissionSchema],
})

export interface VoiceYourOpinionInterface extends Document {
  orgId: string
  name?: string
  surveyTopics?: string[]
  amount?: number
  pictureUrl?: string
  submissions?: SubmissionInterface[]
}

export const VoiceYourOpinionModel = model<VoiceYourOpinionInterface>('VoiceYourOpinion', VoiceYourOpinionSchema)
