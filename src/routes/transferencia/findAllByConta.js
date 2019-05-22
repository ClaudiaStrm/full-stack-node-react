const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = Transferencia => (req, res) => {
  return Transferencia.findAll({
    where: {
       [Op.or]: [{id_depositante: req.params.conta_id }, {id_favorecido: req.params.conta_id }]
    }
  })
  .then(transferencias => {
    if (!transferencias) return res.send('Não encontrado.')
    res.send(transferencias)
  })
}
