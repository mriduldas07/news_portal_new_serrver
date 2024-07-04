const { auth } = require("../../middleware/auth");
const { getUserReading } = require("./userReadingController");

const router = require("express").Router();

router.get("/get-user-reading", auth("reader"), getUserReading);

module.exports.UserReadingRouter = router;
