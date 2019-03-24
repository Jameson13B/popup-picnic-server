module.exports = app => {
  const users = require("../controllers/user.controller");

  // User Register
  app.post("/register", users.register);

  // User Login
  app.get("/login", users.login);

  // Retrieve all Users
  app.get("/users", users.findAll);

  // Update a User with userId
  app.put("/users/:_id", users.update);

  // Delete a User with userId
  app.delete("/users/:_id", users.delete);
};
