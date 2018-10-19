const Box = require('../models/Box')

class BoxesController {
  async index () {
    try {
      const boxListPromise = Box.find()
      const boxList = await boxListPromise
      return boxList
    } catch (err) {
      process.nextTick(() => console.error(`Error creating user: ${err}`))
      throw err
    }
  }

  async create (data) {
    try {
      const createPromise = Box.create(data)
      const response = await createPromise
      return response
    } catch (err) {
      process.nextTick(() => console.error(`Error creating user: ${err}`))
      throw err
    }
  }

  async show (id) {
    try {
      const findPromise = Box.findById(id)
      const findResponse = await findPromise
      return findResponse
    } catch (err) {
      process.nextTick(() => console.error(`Error getting user: ${err}`))
      throw err
    }
  }

  async update (id, data) {
    try {
      const updatePromise = Box.findByIdAndUpdate(id, data)
      const updateResponse = await updatePromise
      return updateResponse
    } catch (err) {
      process.nextTick(() => console.error(`Error updating user: ${err}`))
      throw err
    }
  }

  async delete (id) {
    try {
      const deletePromise = Box.findByIdAndDelete(id)
      const response = await deletePromise
      return response
    } catch (err) {
      process.nextTick(() => console.error(`Error deleting user: ${err}`))
      throw err
    }
  }
}

// Make this controller singleton
let boxesController = null
if (!boxesController) {
  boxesController = new BoxesController()
}

module.exports = boxesController
