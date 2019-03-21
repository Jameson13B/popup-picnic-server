const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PicnicSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    date: Number,
    attendees: [{ type: Schema.Types.ObjectId, ref: "Users" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Picnics", PicnicSchema);
