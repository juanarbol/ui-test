const User = require('../models/User')

class UsersController {
  async create (data) {
    try {
      const createPromise = User.create(data)
      const response = await createPromise
      return response
    } catch (err) {
      process.nextTick(() => console.error(`Error creating user: ${err}`))
      throw err
    }
  }

  async votes (id) {
    try {
      const userVotesPromise = User.votes(id)
      const response = await userVotesPromise
      return response
    } catch (err) {
      process.nextTick(() => console.error(`Error creating user: ${err}`))
      throw err
    }
  }

  async register (data) {
    const {
      age,
      marriageStatus,
      name,
      password,
      username
    } = data

    const user = new User({
      age,
      marriageStatus,
      name,
      username
    })

    try {
      const resgisterPromise = User.register(user, password)
      const response = await resgisterPromise
      return response
    } catch (err) {
      process.nextTick(() => console.error(`Error registering user: ${err}`))
      throw err
    }
  }

  async show (id) {
    try {
      const findPromise = User.findById(id)
      const findResponse = await findPromise
      return findResponse
    } catch (err) {
      process.nextTick(() => console.error(`Error getting user: ${err}`))
      throw err
    }
  }

  async update (id, data) {
    try {
      const updatePromise = User.findByIdAndUpdate(id, data)
      const updateResponse = await updatePromise
      return updateResponse
    } catch (err) {
      process.nextTick(() => console.error(`Error updating user: ${err}`))
      throw err
    }
  }

  async delete (id) {
    try {
      const deletePromise = User.findByIdAndDelete(id)
      const response = await deletePromise
      return response
    } catch (err) {
      process.nextTick(() => console.error(`Error deleting user: ${err}`))
      throw err
    }
  }
}

// Make this controller singleton
let controller = null
if (!controller) {
  controller = new UsersController()
}

module.exports = controller
