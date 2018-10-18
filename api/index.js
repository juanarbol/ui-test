const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

const User = require('./models/User')

const loginHandler = require('./routes/login')
const registerHandler = require('./routes/register')

const app = express()

const sessionOpts = {
  secret:'Hello World, this is a session',
  resave: false,
  saveUninitialized: false
}

mongoose.connect('mongodb://localhost/auth_demo_app', { useNewUrlParser: true })


// Passport authentication setup
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express API setup
app.use(passport.initialize())
app.use(passport.session())
app.use(session(sessionOpts))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/login', loginHandler)
app.use('/register', registerHandler)

app.listen(3000, () => console.info('App running on port 3000'))
