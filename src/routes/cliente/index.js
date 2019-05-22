const get = require('./get')

module.exports = (Cliente, router) => {
  router.get('/cliente/:cliente_id', get(Cliente))
  return router
}
