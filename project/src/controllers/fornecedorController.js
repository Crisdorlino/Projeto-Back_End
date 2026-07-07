const { Fornecedor } = require("../models");

module.exports = {
  async createFornecedor(req, res) {
    try {
      const fornecedor = await Fornecedor.create(req.body);
      res.status(201).json(fornecedor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getFornecedores(req, res) {
    const fornecedores = await Fornecedor.findAll();
    res.json(fornecedores);
  },

  async updateFornecedor(req, res) {
    try {
      const { id } = req.params;
      await Fornecedor.update(req.body, { where: { id } });
      res.json({ message: "Fornecedor atualizado com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deleteFornecedor(req, res) {
    try {
      const { id } = req.params;
      await Fornecedor.destroy({ where: { id } });
      res.json({ message: "Fornecedor deletado com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};