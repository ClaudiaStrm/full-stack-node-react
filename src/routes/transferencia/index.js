const get = require('./get')
const findAll = require('./findAllByConta')
const create = require('./create')
const update = require('./update')
const completarTransferencia = require('./completarTransferencia')

module.exports = (Transferencia, Conta, router) => {
  router.post('/conta/:conta_id/transferencia/:favorecido_id/criar', create(Transferencia))
  router.get('/transferencia/:transferencia_id', get(Transferencia))
  router.get('/conta/:conta_id/transferencias', findAll(Transferencia))
  router.post('/conta/:conta_id/transferencia/:transferencia_id/update', update(Transferencia, Conta))
  router.post('/conta/:conta_id/transferencia/:transferencia_id', completarTransferencia(Transferencia, Conta))
  return router
}
