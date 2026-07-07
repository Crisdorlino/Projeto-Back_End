// associacao.js
module.exports = (sequelize) => {
  const ProdutoFornecedor = sequelize.define("ProdutoFornecedor", {});
  return ProdutoFornecedor;
};