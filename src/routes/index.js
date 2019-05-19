const router = require('express').Router()
const clienteRoutes = require('./cliente')

module.exports = models => {
  clienteRoutes(models.Cliente, router)
  return router
}
