const mongoose = require("mongoose");

const PicnicSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    date: Number,
    attendees: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Picnics", PicnicSchema);
