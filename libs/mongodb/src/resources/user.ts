import { model, Schema, Document } from 'mongoose'

const UserSchema = new Schema({
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  pictureUrl: {
    type: String,
  },
})

export interface UserInterface extends Document {
  walletAddress: string
  displayName: string
  pictureUrl?: string
}

export const UserModel = model<UserInterface>('User', UserSchema)
