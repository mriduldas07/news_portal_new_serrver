const { auth } = require("../../middleware/auth");
const { createCategory, getAllCategory } = require("./category.controller");

const router = require("express").Router();

router.post("/create-category", auth("editor"), createCategory);
router.get("/all-category", getAllCategory);

module.exports.CategoryRouter = router;
