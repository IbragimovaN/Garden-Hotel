const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user-model");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.patch(
  "/:id",

  async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        returnDocument: "after",
      });
      console.log(user);
      res.send(user);
    } catch (e) {
      res.send({ error: e.message || "Неизвестная ошибка" });
    }
  }
);

module.exports = router;
