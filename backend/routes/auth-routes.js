const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router({ mergeParams: true });
const { generateToken } = require("../halpers/generateToken");

router.post("/register", async (req, res) => {
  console.log("register", req.body.firstName);
  try {
    if (!req.body.password) {
      throw new Error("Заполните пароль");
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      throw new Error("Пользователь с таким email уже существует");
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10);
    let avatar = "";
    if (req.body.gender === "женщина") {
      avatar = "uploads/avatar-woman.jpg";
    } else if (req.body.gender === "мужчина") {
      avatar = "uploads/avatar-man.jpg";
    } else {
      avatar = "uploads/avatar-other.webp";
    }

    let user = await User.create({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      gender: req.body.gender,
      birthYear: req.body.birthYear,
      email: req.body.email,
      password: passwordHash,
      avatar: avatar,
    });
    res.send(user);
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("Пользователь не найден");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Не верный пароль");
    }
    const token = generateToken({ id: user._id }, process.env.JWT_SECRET);
    console.log("token", token);
    res.cookie("token", token, { httpOnly: true }).send(user);
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});

router.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true }).send({});
});

module.exports = router;
