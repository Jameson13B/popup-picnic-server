const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    uid: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Users", UserSchema);
