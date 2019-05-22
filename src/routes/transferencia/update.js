const lista = require('../../models')

module.exports = (Transferencia, Conta) => (req, res) => {
  Transferencia
  .findOne({
    where: {
      id: req.params.transferencia_id
    },
  //   include: [{
  //   model: Conta,
  //   through: {
  //     attributes: ['saldo'],
  //     where: { id: req.params.conta_id }
  //   }
  // }]
  })
  .then(transferencia => {
    transferencia.update({
      valor: req.body.valor,
      // saldo_momento: transferencia.conta.saldo,
    })
    res.send(transferencia)
  })
}
