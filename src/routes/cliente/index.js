const get = require('./get')

module.exports = (Cliente, router) => {
  router.get('api/cliente/:cliente_id')
}
