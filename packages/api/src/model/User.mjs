import mongoose from 'mongoose'
import { daySchema } from './Day'

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  days: {
    type: [daySchema],
    required: true,
    default: [],
  },
})

const User = mongoose.model('UserDoc', userSchema)
export default User
