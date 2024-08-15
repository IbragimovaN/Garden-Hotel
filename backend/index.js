const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const routes = require("./routes/index.js");

const path = require("path");

const port = 3004;
const app = express();
dotenv.config();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", routes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  app.listen(port, async () => {
    console.log(`server started on port ${port}`);
  });
});
