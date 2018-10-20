const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const isLoggedIn = require('../helpers/isLoggedIn')
const isSameUser = require('../helpers/isSameUser')

const router = Router()

router.get('/logout', async (req, res) => {
  req.logOut()
  res.redirect('/box')
})

router.get('/register', async (req, res) => {
  res.render('register')
})

router.post('/register', async (req, res) => {
  const userData = req.body
  try {
    const registerPromise = UsersController.register(userData)
    const response = await registerPromise
    res.redirect(`/user/${response._id}`)
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
  res.redirect(`${userId}/edit`)
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

router.get('/votes/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const updatePromise = UsersController.votes(userId)
    const response = await updatePromise
    const result = response[0].votes.filter(vote => String(vote.user) === String(userId))
    response[0].votes = result
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

module.exports = router
