const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log("Fetched all users successfully:", users);
    res.send(users);
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    res.status(500).send({ error: "Failed to fetch users" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, role } = req.body;

  try {
    let user = await User.findByPk(id);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    console.log("Updating user with ID:", id);

    // Update user properties
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.role = role;

    // Save changes
    await user.save();

    console.log("User updated successfully:", user);
    res.send(user);
  } catch (error) {
    console.error("Update failed:", error.message);
    res.status(400).send({ error: "Update failed" });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findByPk(id);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    console.log("Deleting user with ID:", id);

    // Delete user
    await user.destroy();

    console.log("User deleted successfully");
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user:", error.message);
    res.status(500).send({ error: "Failed to delete user" });
  }
};



module.exports = { getAllUsers, updateUser, deleteUser };
