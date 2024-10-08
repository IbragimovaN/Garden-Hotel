const { Schema, model } = require("mongoose");

const schema = new Schema({
  firstName: String,
  secondName: String,
  birthday: Date,
  password: String,
  role: { type: String, enum: ["user", "admin"] },
  email: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["мужчина", "женщина", "другое"] },
  avatar: String,
  // favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

module.exports = model("User", schema);
