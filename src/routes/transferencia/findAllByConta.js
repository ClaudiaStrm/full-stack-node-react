const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = Transferencia => (req, res) => {
  return Transferencia.findAll({
    where: {
       [Op.or]: [{depositanteId: req.params.conta_id }, { favorecidoId: req.params.conta_id }]
    }
  })
  .then(transferencias => {
    if (!transferencias) return res.send('Não encontrado.')
    res.send(transferencias)
  })
}
