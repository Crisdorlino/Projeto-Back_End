// fornecedor.js
module.exports = (sequelize, DataTypes) => {
  const Fornecedor = sequelize.define("Fornecedor", {
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING,
    contato: DataTypes.STRING
  });
  return Fornecedor;
};