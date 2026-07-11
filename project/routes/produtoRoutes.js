const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.listar);

router.post("/", produtoController.cadastrar);

router.put("/:id", produtoController.atualizar);

router.delete("/:id", produtoController.excluir);

router.get("/preco", produtoController.buscarPorPreco);

router.get("/total", produtoController.totalProdutos);

module.exports = router;