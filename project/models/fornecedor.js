module.exports = (sequelize, DataTypes) => {

    return sequelize.define("Fornecedor", {

        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        cnpj: {
            type: DataTypes.STRING
        },

        endereco: {
            type: DataTypes.STRING
        },

        contato: {
            type: DataTypes.STRING
        }

    });

};