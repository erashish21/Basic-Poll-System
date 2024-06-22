const { Sequelize } = require("sequelize");

// Create a Sequelize instance with your database credentials
const sequelize = new Sequelize(
  "poll_system_db",
  "root",
  "Ashish123",
  {
    host: "localhost",
    dialect: "mysql",
    logging: console.log, // Disable logging; default: console.log
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
