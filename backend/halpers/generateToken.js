const jwt = require("jsonwebtoken");
require("dotenv/config");
const express = require("express");

function generateToken(data, secret) {
  return jwt.sign(data, secret, { expiresIn: "30d" });
}

function verify(token, secret) {
  if (!token) {
    throw new Error("Invalid token");
  }
  return jwt.verify(token, secret);
}

module.exports = { generateToken, verify };
