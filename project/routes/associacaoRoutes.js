const express = require("express");
const router = express.Router();

const associacaoController = require("../controllers/associacaoController");

// Criar associação
router.post("/", associacaoController.associarProdutoFornecedor);

// Remover associação
router.delete("/", associacaoController.desassociarProdutoFornecedor);

// Listar produtos de um fornecedor
router.get(
  "/fornecedor/:fornecedorId/produtos",
  associacaoController.getProdutosPorFornecedor
);

// Listar fornecedores de um produto
router.get(
  "/produto/:produtoId/fornecedores",
  associacaoController.getFornecedoresPorProduto
);

module.exports = router;