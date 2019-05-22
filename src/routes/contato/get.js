module.exports = Contato => (req, res) => {
  return Contato.findOne({
    where: {
      cliente_id: req.params.cliente_id,
      contato_usuario_id: req.params.contato_id
    }
  })
  .then(contato => {
    if (!contato) return res.send('Não encontrado.')
    res.send(contato)
  })
}
