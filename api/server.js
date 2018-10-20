const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const app = express()

// Routes handlers
const loginHandler = require('./routes/login')
const userHandler = require('./routes/user')
const boxHandler = require('./routes/box')

const sessionOpts = {
  resave: true,
  saveUninitialized: true,
  secret: 'this is a super secret and secure sign :D'
}

// Express API configuration setup
app.use(session(sessionOpts))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// Express routes handlers
app.use('/login', loginHandler)
app.use('/user', userHandler)
app.use('/box', boxHandler)

module.exports = app
