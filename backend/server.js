const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db.config");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const pollRoutes = require("./routes/poll.routes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);

// sequelize.sync({ force: true }).then(() => {
//   console.log("Database & tables created!");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
