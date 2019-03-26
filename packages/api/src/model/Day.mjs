import mongoose from 'mongoose'

export const daySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: '',
  },
  labels: {
    type: [String],
    required: true,
    default: [],
  },
})

const Day = mongoose.model('Day', daySchema)
export default Day
