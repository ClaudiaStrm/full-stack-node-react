const sequelize = require('sequelize')

module.exports = db => db.define('transferencia', {
  saldoMomento: sequelize.FLOAT,
  valor: sequelize.FLOAT,
  data: sequelize.DATE
})
