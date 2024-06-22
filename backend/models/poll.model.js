// models/poll.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");

const Poll = sequelize.define("Poll", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  targetRole: {
    type: DataTypes.ENUM("Teacher", "Student"),
    allowNull: false,
  },
});

Poll.belongsTo(User, { as: "creator", foreignKey: "creatorId" });

module.exports = Poll;
