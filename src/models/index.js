const cliente = require('./cliente')
const conta = require('./conta')
const transferencia = require('./transferencia')

module.exports = db => {
  const Cliente = cliente(db)
  const Conta = conta(db)
  const Transferencia = transferencia(db)

  Cliente.hasOne(Conta)
  Cliente.hasMany(Cliente, { as: 'contato' })
  Conta.belongsTo(Cliente)
  Transferencia.belongsTo(Conta, {
    as: 'depositante',
    foreignKey: 'idDepositante'
  });

  Transferencia.belongsTo(Conta, {
      as: 'favorecido',
      foreignKey: 'idFavorecido'
  });

  return { Cliente }
}
