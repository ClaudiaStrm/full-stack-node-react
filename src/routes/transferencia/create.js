const sequelize = require('sequelize')

module.exports = Transferencia => (req, res) => {
    return Transferencia.create({
      depositanteId: req.params.conta_id,
      favorecidoId: req.params.favorecido_id,
    })
    .then(transferencia => {
      res.send(transferencia)
    })
}
