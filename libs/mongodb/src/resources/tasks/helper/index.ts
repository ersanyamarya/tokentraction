import { Document, Schema } from 'mongoose'
export const SubmissionSchema = new Schema(
  {
    question: String,
    isMultipleChoice: Boolean,
    isMultipleSelect: Boolean,
    options: [String],
    answer: String || [String],
    // create slug from question
    slug: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    _id: false,
  }
)

export interface SubmissionInterface extends Document {
  question?: string
  isMultipleChoice?: boolean
  isMultipleSelect?: boolean
  options?: string[]
  answer?: string | string[]
}
