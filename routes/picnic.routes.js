module.exports = app => {
  const picnics = require("../controllers/picnic.controller");

  // Create a new Picnic
  app.post("/picnics", picnics.create);

  // Retrieve all Picnics
  app.get("/picnics", picnics.findAll);

  // Retrieve a single Picnic with picnicId
  app.get("/picnics/:productId", picnics.findOne);

  // Update a Picnic with picnicId
  app.put("/picnics/:productId", picnics.update);

  // Delete a Picnic with picnicId
  app.delete("/picnics/:productId", picnics.delete);
};
