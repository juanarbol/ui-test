const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

// Load env vars with dotenv package
require('dotenv').config({ path: './app.env' })

const User = require('./models/User')
const app = require('./server')

mongoose.connect('mongodb://localhost/auth_demo_app', { useNewUrlParser: true })

// Passport authentication setup
passport.use(new LocalStrategy(User.authenticate()))
passport.deserializeUser(User.deserializeUser())
passport.serializeUser(User.serializeUser())

const PORT = process.env.PORT
app.listen(PORT, () => console.info(`App running on port ${PORT}`))
