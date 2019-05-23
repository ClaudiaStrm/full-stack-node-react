const cliente = require('./cliente')
const conta = require('./conta')
const transferencia = require('./transferencia')
const favorecido = require('./contato')

module.exports = db => {
  const Cliente = cliente(db)
  const Conta = conta(db)
  const Transferencia = transferencia(db)
  const Contato = favorecido(db)

  Cliente.hasOne(Conta)

  Cliente.belongsToMany( Cliente, {
    as: 'contatoUsuario',
    through: Contato,
    foreignKey: 'clienteId'
  })

  Conta.belongsTo(Cliente)

  Transferencia.belongsTo(Conta, {
    as: 'depositante',
    foreignKey: 'depositanteId'
  })

  Transferencia.belongsTo(Conta, {
      as: 'favorecido',
      foreignKey: 'favorecidoId'
  })

  return { Cliente, Conta, Transferencia, Contato }
}
