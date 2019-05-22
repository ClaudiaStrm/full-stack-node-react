const get = require('./get')
const findAll = require('./findAllByConta')
const create = require('./create')
const update = require('./update')
// const completarTransferencia = require('./completarTransferencia')

module.exports = (Transferencia, router) => {
  router.get('/transferencia/:transferencia_id', get(Transferencia))
  router.get('/conta/:conta_id/transferencias', findAll(Transferencia))
  router.post('/conta/:conta_id/transferencia/:favorecido_id/criar', create(Transferencia))
  router.post('/conta/:conta_id/transferencia/:transferencia_id', update(Transferencia))
  //router.post('/conta/:conta_id/transferencia/:transferencia_id', completarTransferencia(Transferencia, Conta))
  return router
}
//
// const create = require('./create')
// const edit = require('./edit')
// const get = require('./get')
// const update = require('./update')
// const destroy = require('./destroy')
//
// module.exports = (Dieta, Prescricao, Acolhido, router) => {
//   router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta', create(Dieta, Prescricao))
//   router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/dieta/:dieta_id', get(Dieta))
//   router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', edit(Dieta, Prescricao, Acolhido))
//   router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', update(Dieta, Prescricao))
//   router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/excluir', destroy(Dieta, Prescricao))
//   return router
// }
