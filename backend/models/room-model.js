const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: Number,
  type: String,
  price: Number,
  rate: Number,
  imagesUrl: [String],
  bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  hasWifi: Boolean,
  hasConditioner: Boolean,
  hasWorkSpace: Boolean,
  canSmoke: Boolean,
  canPets: Boolean,
  maxAdult: Number,
  maxChildren: Number,
});

module.exports = model("Room", schema);
