const { sequelize, Produto, Fornecedor } = require("./models");

async function seedDB() {
  try {
    await sequelize.sync({ force: true }); // recria tabelas

    // Criar produtos
    const p1 = await Produto.create({
      nome: "Camiseta Básica",
      descricao: "Camiseta de algodão",
      preco: 49.90,
      codigoBarras: "111111"
    });

    const p2 = await Produto.create({
      nome: "Tênis Esportivo",
      descricao: "Tênis para corrida",
      preco: 199.90,
      codigoBarras: "222222"
    });

    // Criar fornecedores
    const f1 = await Fornecedor.create({
      nome: "Fornecedor Alpha",
      cnpj: "12345678000199",
      endereco: "Rua A, 100",
      contato: "alpha@fornecedor.com"
    });

    const f2 = await Fornecedor.create({
      nome: "Fornecedor Beta",
      cnpj: "98765432000188",
      endereco: "Av. B, 200",
      contato: "beta@fornecedor.com"
    });

    // Criar associações
    await p1.addFornecedor(f1);
    await p1.addFornecedor(f2);
    await p2.addFornecedor(f2);

    console.log("Seed concluído com sucesso!");
  } catch (err) {
    console.error("Erro ao popular banco:", err);
  } finally {
    await sequelize.close();
  }
}

seedDB();