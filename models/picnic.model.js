const mongoose = require("mongoose");

const PicnicSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    date: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Picnics", PicnicSchema);
