exports.config = {
  tests: './tests/puppeteer/*_test.js',
  output: './tests/puppeteer/output',
  include: {
    I: './tests/puppeteer/steps_file.js'
  },
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080/tests/puppeteer/pages/',
      show: true
    }
  }
}
