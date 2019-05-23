const lista = require('../../models')

module.exports = (Transferencia, Conta) => (req, res) => {
  Transferencia
  .findOne({
    where: {
      id: req.params.transferencia_id
    }
  })
  .then(transferencia => {
    transferencia.update({
      valor: req.body.valor,
    })
    res.send(transferencia)
  })
}
