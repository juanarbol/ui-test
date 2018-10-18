const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

const User = require('./models/User')

const loginHandler = require('./routes/login')
const userHandler = require('./routes/user')

const app = express()

const sessionOpts = {
  resave: false,
  saveUninitialized: false,
  secret: 'this is a super secret and secure sign :D'
}

mongoose.connect('mongodb://localhost/auth_demo_app', { useNewUrlParser: true })

// Passport authentication setup
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Express API setup
app.use(passport.initialize())
app.use(passport.session())
app.use(session(sessionOpts))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/login', loginHandler)
app.use('/user', userHandler)

app.listen(3000, () => console.info('App running on port 3000'))
