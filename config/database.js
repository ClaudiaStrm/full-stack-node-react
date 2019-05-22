const Sequelize = require('sequelize')

module.exports =  new Sequelize('ekki', 'ekki', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});
