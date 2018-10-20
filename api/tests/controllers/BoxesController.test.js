/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const { expect } = require('chai')
const sinon = require('sinon')
const controller = require('../../controllers/BoxesController')

describe('#BoxesController', () => {
  describe('#BoxesController.save', () => {
    it('Should be called once', done => {
      const spy = sinon.spy()
      controller.save = spy

      controller.save()
      expect(spy.calledOnce)
      done()
    })

    it('Should be called with args', () => {
      const mock = { _id: 'Stub id', name: 'Stub' }
      const saveStub = sinon.stub().withArgs(mock).returns(mock)
      controller.save = saveStub

      controller.save(mock)
      expect(saveStub.calledWith(mock)).to.be.true
      expect(controller.save(mock)).to.equals(mock)
    })
  })
})
