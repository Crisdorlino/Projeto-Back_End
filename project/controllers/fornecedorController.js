const { Fornecedor } = require("../models");

module.exports = {

    async listar(req, res) {

        try {

            const fornecedores = await Fornecedor.findAll();

            return res.json(fornecedores);

        } catch (err) {

            return res.status(500).json({
                erro: err.message
            });

        }

    },

    async cadastrar(req, res) {

        try {

            const fornecedor = await Fornecedor.create(req.body);

            return res.status(201).json(fornecedor);

        } catch (err) {

            return res.status(400).json({
                erro: err.message
            });

        }

    },

    async atualizar(req, res) {

        try {

            const { id } = req.params;

            await Fornecedor.update(req.body, {
                where: { id }
            });

            const fornecedor = await Fornecedor.findByPk(id);

            return res.json(fornecedor);

        } catch (err) {

            return res.status(400).json({
                erro: err.message
            });

        }

    },

    async excluir(req, res) {

        try {

            const { id } = req.params;

            await Fornecedor.destroy({
                where: { id }
            });

            return res.json({
                mensagem: "Fornecedor excluído com sucesso."
            });

        } catch (err) {

            return res.status(400).json({
                erro: err.message
            });

        }

    }

};