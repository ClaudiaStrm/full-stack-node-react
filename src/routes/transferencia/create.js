const sequelize = require('sequelize')
const milissegundos = 12000

module.exports = Transferencia => (req, res) => {
  Transferencia.max('data', { where: { id_favorecido: req.params.favorecido_id } })
  .then(ultimaTransferencia => {
    console.log(ultimaTransferencia > new Date() - 120000);
    if (ultimaTransferencia > new Date() - milissegundos) return res.send('não permitido')

    return Transferencia.create({
      id_depositante: req.params.conta_id,
      id_favorecido: req.params.favorecido_id,
      data: new Date()
    })
    .then(transferencia => {
      res.send(transferencia)
    })
  })
}
