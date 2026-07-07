const { Produto } = require("../models");

module.exports = {
  async createProduto(req, res) {
    try {
      const produto = await Produto.create(req.body);
      res.status(201).json(produto);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getProdutos(req, res) {
    const produtos = await Produto.findAll();
    res.json(produtos);
  },

  async updateProduto(req, res) {
    try {
      const { id } = req.params;
      await Produto.update(req.body, { where: { id } });
      res.json({ message: "Produto atualizado com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deleteProduto(req, res) {
    try {
      const { id } = req.params;
      await Produto.destroy({ where: { id } });
      res.json({ message: "Produto deletado com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};