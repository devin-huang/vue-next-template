const path = require('path')
const resolve = src => path.resolve(__dirname, src)
module.exports = {
  alias: {
    '@': resolve(__dirname, './src'),
  },
}
