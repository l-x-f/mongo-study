import { Schema, model } from '../db/mongo'

interface User {
  name: string
  email: string
  avatar?: string
  age?: number
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  age: Number
})

// 3. Create a Model.
const UserModel = model<User>('user', schema)

export default UserModel
