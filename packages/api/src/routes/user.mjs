import User from '../model/User'

// eslint-disable-next-line import/prefer-default-export
export const addUserRoute = async ({ body }, res) => {
  try {
    const newUser = await User.create(body)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error })
  }
}
