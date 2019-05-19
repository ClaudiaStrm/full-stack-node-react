const sequelize = require('sequelize')

module.exports = db => db.define('transferencia', {
  valor: sequelize.FLOAT,
  data: sequelize.DATE
})
