const {expect} = require('../config/test-config');
const {isValidPath} = require('../../');

describe('Path validation', () => {

  it('check invalid paths', async () =>  {
    const paths = [
      '/home/user/Documents/foo.log was written',
      'the file /home/user/Documents/foo.log was written',
    ]

    paths.forEach(p => {
      isValidPath(p).should.equal(false)
    })
  })

  it('check valid paths', async () => {
    const paths = [
      '/home/user/Documents/foo.log',
      '/foo.bar',
    ]

    paths.forEach(p => {
      isValidPath(p).should.equal(true)
    })
  })
})