const User = require("../models/user.model");

// createUser שירות ליצירת משתמש חדש
const createUser = async (name, email, password) => {
  return await User.create({ name, email, password });
};

module.exports = { createUser };
