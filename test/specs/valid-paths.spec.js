const {expect} = require('../config/test-config');
const {isAbsoluteLinuxPath, isAbsoluteWindowsPath} = require('../../');

describe('Valid paths', () => {

  describe('on Linux', () => {
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
        isAbsoluteLinuxPath(p).should.equal(true)
      })
    })
  });

  describe('on Windows', () => {
    const paths = [
      'C:\\home\\user\\Documents\\foo.log',
      'D:\\foo.bar',
      'D:\\~',
      'C:\\foo',
      'C:\\.git',
      'C:\\dir\\',
      'C:\\absolute\\sub-dir\\',
      'C:\\absolute\\file\\path',
    ]

    paths.forEach(p => {
      it(`${p}`, () => {
        isAbsoluteWindowsPath(p).should.equal(true)
      })
    })
  });
})