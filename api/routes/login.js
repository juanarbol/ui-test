const { Router } = require('express')
const passport = require('passport')
const router = Router()

router.post('/', passport.authenticate('local', { successRedirect: '/box' }), (req, res) => {
  res.send(req.user.username)
})

router.get('/', (req, res) => {
  res.render('login', { title: 'Server-side rendered form' })
})

module.exports = router
