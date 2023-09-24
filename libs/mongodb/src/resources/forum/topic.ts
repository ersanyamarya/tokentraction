import { Document, Schema, model } from 'mongoose'

const TopicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  organizationId: {
    type: Schema.Types.ObjectId,
    ref: 'Organization',
  },
  summary: String,
  bestAnswer: String,
})

export interface TopicDocument extends Document {
  title: string
  organizationId: string
  summary: string
  bestAnswer: string
}

export const TopicModel = model<TopicDocument>('Topic', TopicSchema)
