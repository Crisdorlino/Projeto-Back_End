const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
});

const Produto = require("./produto")(sequelize, DataTypes);
const Fornecedor = require("./fornecedor")(sequelize, DataTypes);
const ProdutoFornecedor = require("./associacao")(sequelize, DataTypes);

Produto.belongsToMany(Fornecedor, {
    through: ProdutoFornecedor,
    as: "fornecedores",
    foreignKey: "produtoId",
    otherKey: "fornecedorId"
});

Fornecedor.belongsToMany(Produto, {
    through: ProdutoFornecedor,
    as: "produtos",
    foreignKey: "fornecedorId",
    otherKey: "produtoId"
});

module.exports = {
    sequelize,
    Produto,
    Fornecedor,
    ProdutoFornecedor
};