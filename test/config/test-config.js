const chai = require('chai');
const path = require('path');

const should = chai.should();
const expect = chai.expect;

function toCurrentPlatformPath(src) {
  return typeof src === 'string'
    ? src.split('/').join(path.sep)
    : src;
}

module.exports = {
  chai,
  expect,
  toCurrentPlatformPath,
};

