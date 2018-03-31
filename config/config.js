var path = require('path')
var rootPath = path.normalize(__dirname + '/..')
var env = process.env.NODE_ENV || 'development'

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'hbc-mongo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hbc-mongo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'hbc-mongo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hbc-mongo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'hbc-mongo'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGO_URL
  }
}

module.exports = config[env]
