const sequelize = require('sequelize')

module.exports = db => db.define('conta', {
  saldo: sequelize.FLOAT,
  limite: sequelize.FLOAT
})
