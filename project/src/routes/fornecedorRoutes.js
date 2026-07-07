const express = require("express");
const router = express.Router();
const fornecedorController = require("../controllers/fornecedorController");

// Criar fornecedor
router.post("/", fornecedorController.createFornecedor);

// Listar todos os fornecedores
router.get("/", fornecedorController.getFornecedores);

// Atualizar fornecedor
router.put("/:id", fornecedorController.updateFornecedor);

// Deletar fornecedor
router.delete("/:id", fornecedorController.deleteFornecedor);

module.exports = router;