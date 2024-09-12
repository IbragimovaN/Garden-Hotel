const express = require("express");
const filterRooms = require("../halpers/filterRooms");
const Room = require("../models/room-model");
const upload = require("../middleweare/uploads");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find();
    if (Object.keys(req.query).length > 0) {
      const filteredRooms = await filterRooms(rooms, req.query);
      filteredRooms.forEach((element) => {
        console.log(element.number);
      });

      return res.status(200).send(filteredRooms);
    }

    res.status(200).send(rooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    res.send(room);
  } catch (e) {
    res.status(500).json({
      message: "Ошибка сервера. Попробуйте позже",
    });
  }
});

router.post("/", upload.array("imagesUrl", 6), async (req, res) => {
  console.log("post запустился");

  console.log(req.files);
  try {
    const imagesUrls = req.files.map((file) => file.path);
    console.log(imagesUrls);
    const newRoom = { ...req.body, imagesUrl: imagesUrls };
    await Room.create(newRoom);
    res.status(201).json(newRoom);
  } catch (e) {
    console.log(e);
  }
});

router.patch(
  "/:id/imagesUrl",
  upload.array("imagesUrl", 6),
  async (req, res) => {
    try {
      const imagesUrlsNew = req.files.map((file) => file.path);

      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $push: { imagesUrl: { $each: imagesUrlsNew } } }, // Используем $push с $each для добавления нескольких элементов
        { new: true } // Возвращаем обновленный документ
      );

      if (!updatedRoom) {
        return res.status(404).send("Room not found");
      }

      res.status(200).json(updatedRoom);
    } catch (e) {
      console.error(e);
      res.status(500).send("Internal server error");
    }
  }
);

router.patch("/:id", async (req, res) => {
  try {
    // console.log(req.params.id, req.body);

    const rr = await Room.findById(req.params.id);
    console.log(rr);
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // исправлено: использовать `new: true` по новому Mongoose API
    });

    console.log(updatedRoom);

    if (!updatedRoom) {
      return res.status(404).send("Room not found");
    }

    res.status(200).json(updatedRoom);
  } catch (e) {}
});

module.exports = router;
