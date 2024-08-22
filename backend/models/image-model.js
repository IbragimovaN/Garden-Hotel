const mongoose = require("mongoose");

const schema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

module.exports = model("Image", schema);
