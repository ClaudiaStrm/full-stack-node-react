const contatos = Contato => (req, res) => {
  return Contato.findAll({
    where: { cliente_id: req.params.cliente_id }
  })
  .then(contatos => {
    res.send(contatos)
  })
}

module.exports = contatos
