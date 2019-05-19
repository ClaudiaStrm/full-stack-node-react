module.exports = Conta => (req, res) => {
return Conta.findOne({
  where: {
    cliente_id: req.params.cliente_id
  }
})
.then(conta => {
  if (!conta) return res.send('Não encontrado.')
  res.send(conta)
})
}
