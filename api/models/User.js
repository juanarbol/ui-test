const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const stringRequireValidator = {
  required: true,
  type: String
}

// Model schema and typing
const userSchema = new mongoose.Schema({
  age: Number,
  marriageStatus: String,
  name: stringRequireValidator,
  password: { ...stringRequireValidator, required: false },
  username: stringRequireValidator
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

// Custom method for getting votes of any user
userSchema.statics.votes = function (userId) {
  return this.model('Box').find({ votes: { $elemMatch: { user: userId } } })
}

// User passport plugin for register users and encrypt his pass
userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)
