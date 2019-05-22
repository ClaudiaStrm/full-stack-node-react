const get = require('./getByCliente')

module.exports = (Conta, router) => {
  router.get('/:cliente_id/conta', get(Conta))
}
