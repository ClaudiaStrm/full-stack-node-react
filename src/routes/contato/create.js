module.exports = Contato => (req, res) => {
  return Contato
  .create({
    clienteId: req.params.cliente_id,
    contatoUsuarioId: req.params.contato_usuario_id
  })
  .then(contato => {
    res.send(contato)
  })
}
