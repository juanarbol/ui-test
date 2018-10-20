const { Router } = require('express')
const BoxesController = require('../controllers/BoxesController')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const boxListPromise = BoxesController.index()
    const response = await boxListPromise
    res.render('box', { user: req.user, boxes: [...response] })
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.post('/new', async (req, res) => {
  const userData = req.body
  try {
    const registerPromise = BoxesController.create(userData)
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
    const updatePromise = BoxesController.update(userData.id, userData)
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
    const updatePromise = BoxesController.show(userId)
    const response = await updatePromise
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.post('/vote', async (req, res) => {
  const {
    boxId,
    liked,
    userId
  } = req.body

  const voteInfo = {
    liked,
    user: userId
  }
  try {
    const updatePromise = BoxesController.vote(boxId, voteInfo)
    const response = await updatePromise
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

router.delete('/delete', async (req, res) => {
  const boxId = req.params.id
  try {
    const updatePromise = BoxesController.delete(boxId)
    const response = await updatePromise
    res.send(response)
  } catch (err) {
    process.nextTick(() => {
      res.status(500).send({ error: err })
    })
  }
})

module.exports = router
