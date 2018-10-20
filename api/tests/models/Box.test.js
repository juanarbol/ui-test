/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const { expect } = require('chai')
const BoxModel = require('../../models/Box')

describe('#BoxModel', () => {
  let box
  beforeEach(() => {
    box = new BoxModel()
  })

  describe('BoxModel.name', () => {
    it('Should be required', done => {
      box.validate(err => {
        expect(err.errors.name).to.exist
        done()
      })
    })
  })

  describe('BoxModel.description', () => {
    it('Should be required', done => {
      box.validate(err => {
        expect(err.errors.description).to.exist
        done()
      })
    })
  })

  describe('BoxModel.imgSrc', () => {
    it('Should be required', done => {
      box.validate(err => {
        expect(err.errors.imgSrc).to.exist
        done()
      })
    })
  })
})
