const { Router } = require('express')
const UsersController = require('../controllers/UserController')

const router = Router()

router.post('/register', async (req, res) => {
  const userData = req.body
  try {
    const registerPromise = UsersController.register(userData)
    const response = await registerPromise
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.post('/update', async (req, res) => {
  const userData = req.body
  try {
    const updatePromise = UsersController.update(userData.id, userData)
    const response = await updatePromise
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.get('/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const updatePromise = UsersController.show(userId)
    const response = await updatePromise
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

module.exports = router
