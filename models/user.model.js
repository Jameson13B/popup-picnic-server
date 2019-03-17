const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    uid: String,
    picnics: [{ type: Schema.Types.ObjectId, ref: "Picnics" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Users", UserSchema);
