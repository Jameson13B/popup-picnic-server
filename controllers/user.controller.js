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
    _id: req.body.uid,
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
  User.findById(req.headers.authorization)
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

// Retrieve all picnics
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

// Update a picnic
// exports.update = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     return res.statu(400).send({
//       message: "Picnic content cannot be empty"
//     });
//   }
//   // Find and update product with the request body
//   Picnic.findByIdAndUpdate(
//     req.params.picnicId,
//     {
//       title: req.body.title,
//       description: req.body.description,
//       location: req.body.location,
//       date: req.body.date
//     },
//     { new: true }
//   )
//     .then(picnic => {
//       if (!picnic) {
//         return res.status(404).send({
//           message: "Product not found with id " + req.params.picnicId
//         });
//       }
//       res.send(picnic);
//     })
//     .catch(err => {
//       if (err.kind === "ObjectId") {
//         return res.status(404).send({
//           message: "Picnic not found with id " + req.params.picnicId
//         });
//       }
//       return res.status(500).send({
//         message:
//           "Something wrong updating picnic with id " + req.params.picnicId
//       });
//     });
// };

// Delete a picnic with the specified picnicId in the request
// exports.delete = (req, res) => {
//   Picnic.findByIdAndRemove(req.params.picnicId)
//     .then(picnic => {
//       if (!picnic) {
//         return res.status(404).send({
//           message: "Product not found with id " + req.params.picnicId
//         });
//       }
//       res.send({ message: "Picnic deleted successfully!" });
//     })
//     .catch(err => {
//       if (err.kind === "ObjectId" || err.name === "NotFound") {
//         return res.status(404).send({
//           message: "Picnic not found with id " + req.params.picnicId
//         });
//       }
//       return res.status(500).send({
//         message: "Could not delete product with id " + req.params.picnicId
//       });
//     });
// };
