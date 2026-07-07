const { sequelize } = require("./models");

async function initDB() {
  try {
    await sequelize.sync({ force: true }); // recria tabelas sempre que rodar
    console.log("Banco de dados sincronizado com sucesso!");
  } catch (err) {
    console.error("Erro ao sincronizar banco:", err);
  } finally {
    await sequelize.close();
  }
}

initDB();