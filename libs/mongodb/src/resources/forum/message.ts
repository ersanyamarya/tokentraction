import { Document, Schema, model } from 'mongoose'

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  topicId: {
    type: Schema.Types.ObjectId,
    ref: 'Topic',
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

export interface MessageDocument extends Document {
  content: string
  topicId: string
  userId: string
}

export const MessageModel = model<MessageDocument>('Message', MessageSchema)
