module.exports = (sequelize, DataTypes) => {

    return sequelize.define("ProdutoFornecedor", {}, {
        timestamps: false
    });

};