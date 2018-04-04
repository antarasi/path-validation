const {toCurrentPlatformPath} = require('../config/test-config');
const {isAbsolutePath} = require('../../');

describe('Valid paths', () => {

  const paths = [
    '/home/user/Documents/foo.log',
    '/foo.bar',
    '/~',
    '/foo',
    '/.git',
    '/dir/',
    '/absolute/sub-dir/',
    '/absolute/file/path',
  ]

  paths.forEach(p => {
    it(`${p}`, () => {
      const platformPath = toCurrentPlatformPath(p);
      isAbsolutePath(platformPath).should.equal(true)
    })
  })
})