const { Router } = require('express')
const router = Router()

const User = require('../models/User')

router.post('/', async (req, res) => {
  try {
    const user = await new User({
      username: req.body.username
    })

    await User.register(user, req.body.password, (err, user) => {
      if (err) {
        res.status(500).send(err)
        throw err
      }
      res.send('Register: ' + user)
    })
  } catch (err) {
    console.error(err)
    throw err
  }
})

module.exports = router
