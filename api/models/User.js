const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const stringRequireValidator = {
  required: true,
  type: String
}
const userSchema = new mongoose.Schema({
  age: Number,
  marriageStatus: String,
  name: stringRequireValidator,
  password: { ...stringRequireValidator, required: false },
  username: stringRequireValidator
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)
