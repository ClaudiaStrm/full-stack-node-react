const sequelize = require('sequelize')

module.exports = db => db.define('cliente', {
  nome: sequelize.STRING,
  cpf: sequelize.STRING,
  telefone: sequelize.STRING
})
