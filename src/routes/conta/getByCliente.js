module.exports = Conta => (req, res) => {
return Conta.findOne({
  where: {
    clienteId: req.params.cliente_id
  }
})
.then(conta => {
  if (!conta) return res.send('Não encontrado.')
    res.send(conta)
  })
}
