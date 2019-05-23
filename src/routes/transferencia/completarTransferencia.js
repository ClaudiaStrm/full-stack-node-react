const sequelize = require('sequelize')
const Op = sequelize.Op
let ultimaTransferencia = null
const milissegundos = 120000

module.exports = (Transferencia, Conta) => (req, res) => {
  Transferencia.max('data', {
    where: {
        [sequelize.Op.and]: [
          { favorecidoId: req.body.favorecido_id },
          { valor: req.body.valor }
        ]
      }
   })
   .then(maiorData => {
     ultimaTransferencia = maiorData
   })

   if (ultimaTransferencia > new Date() - milissegundos) {
     Transferencia.destroy({
       where: { id: req.params.transferencia_id }
     })
     return res.send('Transferencia não permitida')
   }

  Transferencia.findOne({
    where: { id: req.params.transferencia_id },
    include: [{ model: Conta, as: 'depositante' }, { model: Conta, as: 'favorecido' }]
  })
  .then(transferencia => {
    if (!transferencia) return res.send('Não encontrado.')
    if (transferencia.valor > transferencia.depositante.saldo + transferencia.depositante.limite) {
      return res.send('Não autorizado.')
    }
    transferencia.update({
      valor: req.body.valor,
      saldoMomento: transferencia.depositante.saldo,
      data: new Date()
    })

    Conta.findOne({
      where: { id: transferencia.depositante.id }
    })
    .then(conta => {
      if (conta.saldo - transferencia.valor < 0) {
        conta.limite = conta.saldo + conta.limite - transferencia.valor
      }
      conta.update({
        saldo: conta.saldo - transferencia.valor,
        limite: conta.limite
      })
    })

    Conta.findOne({
      where: { id: transferencia.favorecido.id }
    })
    .then(conta => {
      conta.update({
        saldo: conta.saldo + transferencia.valor
      })
    })
    res.send(transferencia)
  })
}
