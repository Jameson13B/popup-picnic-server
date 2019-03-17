module.exports = app => {
  const picnics = require("../controllers/picnic.controller");

  // Create a new Picnic
  app.post("/picnics", picnics.create);

  // Retrieve all Picnics
  app.get("/picnics", picnics.findAll);

  // Retrieve a single Picnic with picnicId
  app.get("/picnics/:picnicId", picnics.findOne);

  // Update a Picnic with picnicId
  app.put("/picnics/:picnicId", picnics.update);

  // Delete a Picnic with picnicId
  app.delete("/picnics/:picnicId", picnics.delete);
};
