const { Schema, model } = require("mongoose");

const schema = new Schema({
  firstName: String,
  secondName: String,
  birthYear: Number,
  avatarPhoto: String,
  password: String,
  role: { type: String, enum: ["user", "admin"] },
  email: { type: String, required: true, unique: true },
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = model("User", schema);
