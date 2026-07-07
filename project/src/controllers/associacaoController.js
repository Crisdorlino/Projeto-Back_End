const { Produto, Fornecedor } = require("../models");

module.exports = {
  async associarProdutoFornecedor(req, res) {
    try {
      const { produtoId, fornecedorId } = req.body;
      const produto = await Produto.findByPk(produtoId);
      const fornecedor = await Fornecedor.findByPk(fornecedorId);

      if (!produto || !fornecedor) {
        return res.status(404).json({ error: "Produto ou Fornecedor não encontrado" });
      }

      await produto.addFornecedor(fornecedor);
      res.json({ message: "Associação criada com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async desassociarProdutoFornecedor(req, res) {
    try {
      const { produtoId, fornecedorId } = req.body;
      const produto = await Produto.findByPk(produtoId);
      const fornecedor = await Fornecedor.findByPk(fornecedorId);

      if (!produto || !fornecedor) {
        return res.status(404).json({ error: "Produto ou Fornecedor não encontrado" });
      }

      await produto.removeFornecedor(fornecedor);
      res.json({ message: "Associação removida com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getProdutosPorFornecedor(req, res) {
    const { fornecedorId } = req.params;
    const fornecedor = await Fornecedor.findByPk(fornecedorId, { include: Produto });
    res.json(fornecedor);
  },

  async getFornecedoresPorProduto(req, res) {
    const { produtoId } = req.params;
    const produto = await Produto.findByPk(produtoId, { include: Fornecedor });
    res.json(produto);
  }
};