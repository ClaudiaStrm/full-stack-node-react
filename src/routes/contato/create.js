module.exports = Contato => (req, res) => {
  return Contato
  .create({
    cliente_id: req.params.cliente_id,
    contatoUsuarioId: req.params.contato_usuario_id
  })
  .then(contato => {
    res.send(contato)
  })
}
