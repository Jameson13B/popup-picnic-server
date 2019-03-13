const Picnic = require("../models/picnic.model.js");

// Create new Picnic
exports.create = (req, res) => {
  // Request validations
  if (!req.body) {
    return res.status(400).send({
      message: "Picnic content cannot be empty"
    });
  }
  // Create a Picnic
  const picnic = new Picnic({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date
  });
  // Save Picnic in the DB
  picnic
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while creating picnic."
      });
    });
};

// Retrieve all picnics
exports.findAll = (req, res) => {
  Picnic.find()
    .then(picnics => {
      res.send(picnics);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while retrieving picnics."
      });
    });
};

// Find a single picnic with a picnicId
exports.findOne = (req, res) => {
  Picnic.findById(req.params.picnicId)
    .then(picnic => {
      if (!picnic) {
        return res.status(404).send({
          message: "Picnic not found with id " + req.params.picnicId
        });
      }
      res.send(picnic);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found with id " + req.params.picnicId
        });
      }
      return res.status(500).send({
        message:
          "Something wrong retrieving product with id " + req.params.picnicId
      });
    });
};

// Update a picnic
exports.update = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.statu(400).send({
      message: "Picnic content cannot be empty"
    });
  }
  // Find and update product with the request body
  Picnic.findByIdAndUpdate(
    req.params.picnicId,
    {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date
    },
    { new: true }
  )
    .then(picnic => {
      if (!picnic) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.picnicId
        });
      }
      res.send(picnic);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Picnic not found with id " + req.params.picnicId
        });
      }
      return res.status(500).send({
        message:
          "Something wrong updating picnic with id " + req.params.picnicId
      });
    });
};

// Delete a picnic with the specified picnicId in the request
exports.delete = (req, res) => {
  Picnic.findByIdAndRemove(req.params.picnicId)
    .then(picnic => {
      if (!picnic) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.picnicId
        });
      }
      res.send({ message: "Picnic deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Picnic not found with id " + req.params.picnicId
        });
      }
      return res.status(500).send({
        message: "Could not delete product with id " + req.params.picnicId
      });
    });
};
