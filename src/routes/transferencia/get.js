module.exports = Transferencia => (req, res) => {
return Transferencia.findOne({
  where: {
    id: req.params.transferencia_id
  }
})
.then(transferencia => {
  if (!transferencia) return res.send('Não encontrado.')
  res.send(transferencia)
})
}
