module.exports = (sequelize, DataTypes) => {

    return sequelize.define("Produto", {

        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        descricao: {
            type: DataTypes.STRING
        },

        preco: {
            type: DataTypes.FLOAT
        },

        codigo_barras: {
            type: DataTypes.STRING
        }

    });

};