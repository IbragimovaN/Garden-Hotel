const { Schema, model, SchemaTypes } = require("mongoose");

const schema = new Schema({
  roomId: { type: SchemaTypes.ObjectId, ref: "Room" },
  userId: { type: SchemaTypes.ObjectId, ref: "User" },
  checkInDate: Date,
  checkOutDate: Date,
  numberOfAdults: Number,
  numberOfChildren: Number,
  totalPrice: Number,
});

module.exports = model("Booking", schema);
