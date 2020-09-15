const assert = require('assert')

Feature('Lib')

Scenario('Should see the string "Hello world"', function (I) {
  I.amOnPage('lib.html')
  I.waitForText('Hello world')
})