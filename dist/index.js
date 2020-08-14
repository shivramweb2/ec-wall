
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ec-wall.cjs.production.min.js')
} else {
  module.exports = require('./ec-wall.cjs.development.js')
}
