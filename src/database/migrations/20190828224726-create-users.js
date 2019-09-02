// Criação das tabelas e colunas no banco de dados
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // não permite emails repetidos
      },
      // senha criptografada
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, // todo o usuário será cliente
        allowNull: false,
      },
      // criação e atualização dos registros
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
