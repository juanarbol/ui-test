/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')
const UserModel = require('../../models/User')

describe('#UserModel', () => {
  let user
  beforeEach(() => {
    user = new UserModel()
  })

  describe('UserModel.name', () => {
    it('Should be required', () => {
      user.validate(err => {
        expect(err.errors.name).to.exist
      })
    })
  })

  describe('UserModel.username', () => {
    it('Should be required', () => {
      user.validate(err => {
        expect(err.errors.username).to.exist
      })
    })
  })
})
