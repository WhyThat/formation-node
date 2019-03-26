import config from '@lab/config'
import mongoose from 'mongoose'

const connectToDb = async () => {
  try {
    mongoose.set('useFindAndModify', false)
    console.log(config.server.database.uri)
    const connection = await mongoose.connect(`${config.server.database.uri}/${config.server.database.name}`, {
      useNewUrlParser: true,
    })
    console.log('connected to db')
    return connection
  } catch (e) {
    return Promise.reject(e)
  }
}

export default connectToDb
