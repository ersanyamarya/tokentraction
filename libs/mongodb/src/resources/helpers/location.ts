import { Schema } from 'mongoose'

export const LocationSchema = new Schema(
  {
    country: String,
    state: String,
    city: String,
  },
  {
    _id: false,
  }
)
