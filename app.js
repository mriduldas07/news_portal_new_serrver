const express = require("express");
const cors = require("cors");
const { UserRouter } = require("./src/app/user/user.route");
const { CategoryRouter } = require("./src/app/category/category.route");
const { NewsRouter } = require("./src/app/news/news.route");
const { UserReading } = require("./src/app/userReading/userReading.model");
const {
  UserReadingRouter,
} = require("./src/app/userReading/userReading.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", UserRouter);
app.use("/", CategoryRouter);
app.use("/", NewsRouter);
app.use("/", UserReadingRouter);

app.get("/", (req, res) => {
  res.send("Hello World from news-portal!");
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not found!!!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

module.exports = app;
