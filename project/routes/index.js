const express = require("express");

const router = express.Router();

router.use("/produtos", require("./produtoRoutes"));
router.use("/fornecedores", require("./fornecedorRoutes"));
router.use("/associacao", require("./associacaoRoutes"));

module.exports = router;