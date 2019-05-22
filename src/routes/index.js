const router = require('express').Router()
const clienteRoutes = require('./cliente')
const contaRoutes = require('./conta')
const contatoRoutes = require('./contato')
const transferenciaRoutes = require('./transferencia')

module.exports = models => {
  clienteRoutes(models.Cliente, router),
  contaRoutes(models.Conta, router),
  contatoRoutes(models.Contato, router),
  transferenciaRoutes(models.Transferencia, router)

  return router
}
