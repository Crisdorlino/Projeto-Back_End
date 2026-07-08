const { Produto, Fornecedor, ProdutoFornecedor } = require("../models");

module.exports = {

    async associarProdutoFornecedor(req, res) {

        try {

            const { produtoId, fornecedorId } = req.body;

            const produto = await Produto.findByPk(produtoId);
            const fornecedor = await Fornecedor.findByPk(fornecedorId);

            if (!produto || !fornecedor) {
                return res.status(404).json({
                    erro: "Produto ou fornecedor não encontrado."
                });
            }

            await ProdutoFornecedor.create({
                produtoId,
                fornecedorId
            });

            return res.json({
                mensagem: "Produto associado ao fornecedor com sucesso."
            });

        } catch (err) {

            return res.status(500).json({
                erro: err.message
            });

        }

    },

    async desassociarProdutoFornecedor(req, res) {

        try {

            const { produtoId, fornecedorId } = req.body;

            await ProdutoFornecedor.destroy({
                where: {
                    produtoId,
                    fornecedorId
                }
            });

            return res.json({
                mensagem: "Associação removida com sucesso."
            });

        } catch (err) {

            return res.status(500).json({
                erro: err.message
            });

        }

    },

    async getProdutosPorFornecedor(req, res) {

    try {

        const fornecedor = await Fornecedor.findByPk(req.params.fornecedorId, {
            include: [{
                model: Produto,
                as: "produtos"
            }]
        });

        if (!fornecedor) {
            return res.status(404).json({
                erro: "Fornecedor não encontrado."
            });
        }

        return res.json(fornecedor.produtos);

    } catch (err) {

        return res.status(500).json({
            erro: err.message
        });

    }

    },

    async getFornecedoresPorProduto(req, res) {

    try {

        const produto = await Produto.findByPk(req.params.produtoId, {
            include: [{
                model: Fornecedor,
                as: "fornecedores"
            }]
        });

        if (!produto) {
            return res.status(404).json({
                erro: "Produto não encontrado."
            });
        }

        return res.json(produto.fornecedores);

    } catch (err) {

        return res.status(500).json({
            erro: err.message
        });

    }

}

};