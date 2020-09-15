const Lib = require('../../dist/umd/lib')
const lib = new Lib()

describe('Lib', function () {
  it('should return the string "Hello world"', function () {
    expect(lib.test()).toBe('Hello world');
  });
});
