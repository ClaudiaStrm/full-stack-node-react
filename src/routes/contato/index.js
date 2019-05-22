const get = require('./get')
const findAll = require('./findAllByCliente')
const create = require('./create')
const destroy = require('./destroy')

module.exports = (Contato, router) => {
  router.get('/cliente/:cliente_id/contato/:contato_id', get(Contato)),
  router.get('/cliente/:cliente_id/contatos', findAll(Contato))
  router.post('/cliente/:cliente_id/contato/:contato_usuario_id', create(Contato))
  router.post('/contato/:contato_id', destroy(Contato))
}
