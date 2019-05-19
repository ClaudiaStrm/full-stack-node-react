const get = require('./get')

module.exports = (Transferencia, router) => {
  router.get('api/transferencia/:transferencia_id')
  router.get('api/:id_cliente/transferencias')
}
