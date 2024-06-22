const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

// Import models
const User = require("./user.model")(sequelize, DataTypes);
const Poll = require("./poll.model")(sequelize, DataTypes);

// Define model relationships
Poll.belongsTo(User, { as: "creator", foreignKey: "creatorId" });
User.hasMany(Poll, { as: "polls", foreignKey: "creatorId" });

// Sync models with the database
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error creating database & tables:", err);
  });

module.exports = {
  sequelize,
  User,
  Poll,
};
