module.exports = Cliente => (req, res) => {
return Cliente.findOne({
  where: {
    id: req.params.cliente_id
  }
})
.then(cliente => {
  if (!cliente) return res.send('Não encontrado.')
  res.send(cliente)
  })
}
