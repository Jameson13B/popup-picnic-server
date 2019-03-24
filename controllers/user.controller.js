const User = require("../models/user.model.js");

// User Register
exports.register = (req, res) => {
  // Request validations
  if (!req.body) {
    return res.status(400).send({
      message: "User content cannot be empty"
    });
  }
  // Create a User
  const user = new User({
    uid: req.body.uid,
    email: req.body.email,
    name: req.body.name
  });
  // Save User in the DB
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while register user."
      });
    });
};

// Login single user with uId
exports.login = (req, res) => {
  // Find user using uid in header
  User.findOne({ uid: req.headers.authorization })
    // Populate info for picnics user is attending
    .populate("picnics")
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.headers.authorization
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.headers.authorization
        });
      }
      return res.status(500).send({
        message:
          "Something wrong retrieving authorization with id " +
          req.headers.authorization
      });
    });
};

// Retrieve all users
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while retrieving users."
      });
    });
};

// Update a user
exports.update = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.statu(400).send({
      message: "User update content cannot be empty"
    });
  }
  // Find and update user with the request body
  User.findByIdAndUpdate(
    req.params._id,
    {
      name: req.body.name,
      email: req.body.email
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params._id
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params._id
        });
      }
      return res.status(500).send({
        message: "Something wrong updating user with id " + req.params._id
      });
    });
};

// Delete a picnic with the specified picnicId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params._id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params._id
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params._id
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params._id
      });
    });
};
