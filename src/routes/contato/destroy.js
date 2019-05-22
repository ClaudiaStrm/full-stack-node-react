module.exports = Contato => (req, res) => {
  return Contato
  .destroy({
    where: {
      id: req.params.contato_id
    }
  }).then(() => res.send('Contato excluído'))
}
