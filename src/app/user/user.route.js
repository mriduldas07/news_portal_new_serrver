const { createUser } = require("./user.controller");

const router = require("express").Router();

router.post("/create-user", createUser);

module.exports.UserRouter = router;
