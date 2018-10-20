const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const isLoggedIn = require('../helpers/isLoggedIn')
const isSameUser = require('../helpers/isSameUser')

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

router.post('/update', isLoggedIn, async (req, res) => {
  const userData = req.body
  try {
    const updatePromise = UsersController.update(userData.id, userData)
    await updatePromise
    res.redirect(`/user/${req.user._id}`)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.get('/', isLoggedIn, (req, res) => {
  res.redirect(`/user/${req.user._id}`)
})

router.get('/:id', isLoggedIn, isSameUser, async (req, res) => {
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

router.get('/:id/edit', isLoggedIn, isSameUser, async (req, res) => {
  const userId = req.params.id

  try {
    const updatePromise = UsersController.show(userId)
    const response = await updatePromise
    res.render('edit', { user: response })
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.get('/votes/:id', isLoggedIn, isSameUser, async (req, res) => {
  const userId = req.params.id
  try {
    const updatePromise = UsersController.votes(userId)
    const response = await updatePromise
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.get('/logout', isLoggedIn, async (req, res) => {
  req.logOut()
  res.redirect('/')
})

module.exports = router
