const { Produto } = require("../models");
const { Op } = require("sequelize");

module.exports = {

    async listar(req, res) {

        try {

            const produtos = await Produto.findAll();

            return res.json(produtos);

        } catch (err) {

            return res.status(500).json({
                erro: err.message
            });

        }

    },

    async cadastrar(req, res) {

        try {

            const produto = await Produto.create(req.body);

            return res.status(201).json(produto);

        } catch (err) {

            return res.status(400).json({
                erro: err.message
            });

        }

    },

    async atualizar(req, res) {

        try {

            const { id } = req.params;

            await Produto.update(req.body, {
                where: { id }
            });

            const produto = await Produto.findByPk(id);

            return res.json(produto);

        } catch (err) {

            return res.status(400).json({
                erro: err.message
            });

        }

    },

    async excluir(req, res) {

        try {

            const { id } = req.params;

            await Produto.destroy({
                where: { id }
            });

            return res.json({
                mensagem: "Produto excluído com sucesso."
            });

        } catch (err) {

            return res.status(400).json({
                erro: err.message
            });

        }

    },

    async buscarPorPreco(req,res){

    const {min,max} = req.query;

    const produtos = await Produto.findAll({
        where:{
            preco:{
                [Op.between]:[
                    min,
                    max
                ]
            }
        }
    });

    res.json(produtos);
},


async totalProdutos(req,res){

    const total = await Produto.count();

    res.json({
        totalProdutos: total
    });

},

};