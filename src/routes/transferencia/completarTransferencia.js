const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (Transferencia, Conta) => (req, res) => {
  return Transferencia.findOne({
    where: {
      id: req.params.transferencia_id
    },
    include: [{ model: Conta, where: { id: req.params.conta_id }}]
  })
  .then(transferencia => {
    if (!transferencia) return res.send('Não encontrado.')
    transferencia.update({
      valor: req.body.valor,
      saldo_momento: transferencia.conta.saldo,
      data: new Date()
    })
  })

  res.send(transferencia)
}














// [Op.or]: [{id_depositante: req.params.conta_id }, {id_favorecido: req.params.conta_id }]
