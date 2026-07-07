const { Sequelize, DataTypes } = require("sequelize");

// Conexão com SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite"
});

// Importar modelos
const ProdutoModel = require("./produto")(sequelize, DataTypes);
const FornecedorModel = require("./fornecedor")(sequelize, DataTypes);
const ProdutoFornecedorModel = require("./associacao")(sequelize);

// Definir relações muitos-para-muitos
ProdutoModel.belongsToMany(FornecedorModel, { through: ProdutoFornecedorModel });
FornecedorModel.belongsToMany(ProdutoModel, { through: ProdutoFornecedorModel });

module.exports = {
  sequelize,
  Produto: ProdutoModel,
  Fornecedor: FornecedorModel,
  ProdutoFornecedor: ProdutoFornecedorModel
};