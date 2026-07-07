const express = require("express");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

// Rotas
const produtoRoutes = require("./routes/produtoRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const associacaoRoutes = require("./routes/associacaoRoutes");

app.use("/produtos", produtoRoutes);
app.use("/fornecedores", fornecedorRoutes);
app.use("/associacao", associacaoRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
});