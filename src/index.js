/**
 * Class to create Lib objects
 * @class
 * @property {string} phrase - The phrase that will be returned by Lib.test()
 */
const Lib = function () {
  this.phrase = 'Hello world'
}

/**
 * Outputs Lib.phrase
 * @returns {string} - Returns the Lib.phrase
 */
Lib.prototype.test = function () {
  return this.phrase
}

export default Lib
