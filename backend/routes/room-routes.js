const express = require("express");
const filterRooms = require("../halpers/filterRooms");
const Room = require("../models/room-model");
const upload = require("../middleweare/uploads");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find();
    // if (Object.keys(query).length > 0) {
    //   const filteredRooms = await filterRooms(rooms, query);

    //   return res.status(200).send(filteredRooms);
    // }

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

// router.post("/:id/comments", authenticated, async (req, res) => {
//   const newComment = await addComment(req.params.id, {
//     content: req.body.content,
//     author: req.user.id,
//   });

//   res.send(mapComment(newComment));
// });

// router.delete(
//   "/:postId/comments/:commentId",
//   authenticated,
//   hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
//   async (req, res) => {
//     await deleteComment(req.params.postId, req.params.commentId);

//     res.send({ error: null });
//   }
// );

// router.post("/", authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
//   try {
//     const newProduct = await addProduct({
//       title: req.body.title,
//       image_url: req.body.imagesUrl,
//       brand: req.body.brand,
//       category: req.body.category,
//       age: req.body.age,
//       price: req.body.price,
//       rating: req.body.rating,
//       description: req.body.description,
//       hair_type: req.body.hairType,
//     });
//     res.send({ data: mapProduct(newProduct) });
//   } catch (e) {
//     res.send({ error: e.message || "Неизвестная ошибка" });
//   }
// });

// router.patch(
//   "/:id",
//   authenticated,
//   hasRole([ROLES.ADMIN]),
//   async (req, res) => {
//     const updatedProduct = await editProduct(req.params.id, {
//       title: req.body.title,
//       image_url: req.body.imagesUrl,
//       brand: req.body.brand,
//       category: req.body.category,
//       age: req.body.age,
//       price: req.body.price,
//       rating: req.body.rating,
//       description: req.body.description,
//       hair_type: req.body.hairType,
//     });

//     res.send({ data: mapProduct(updatedProduct) });
//   }
// );

// router.delete(
//   "/:id",
//   authenticated,
//   hasRole([ROLES.ADMIN]),
//   async (req, res) => {
//     await deleteProduct(req.params.id);

//     res.send({ error: null });
//   }
// );

module.exports = router;
