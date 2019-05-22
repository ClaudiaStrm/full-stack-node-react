const sequelize = require('sequelize')

module.exports = db => db.define('contato', {
  id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
})
