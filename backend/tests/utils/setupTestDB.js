const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'localdb',
  database: 'ticketbooking',
});

const setupTestDB = () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  // beforeEach(async () => {
  //   // Truncate all tables in the test database and reset data to initial state
  //   const tableNames = await sequelize.getQueryInterface().showAllTables();
  //   await Promise.all(tableNames.map((tableName) => sequelize.query(`TRUNCATE TABLE ${tableName} CASCADE;`)));
  // });

  afterAll(async () => {
    await sequelize.close();
  });
};

module.exports = setupTestDB;
