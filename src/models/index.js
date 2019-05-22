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
    as: 'contato_usuario',
    through: Contato,
    foreignKey: 'cliente_id'
  })

  Conta.belongsTo(Cliente)

  Transferencia.belongsTo(Conta, {
    as: 'depositante',
    foreignKey: 'id_depositante'
  })

  Transferencia.belongsTo(Conta, {
      as: 'favorecido',
      foreignKey: 'id_favorecido'
  })

  return { Cliente, Conta, Transferencia, Contato }
}
