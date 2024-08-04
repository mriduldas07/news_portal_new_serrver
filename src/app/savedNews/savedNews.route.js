const { auth } = require("../../middleware/auth");
const { createSavedNews, getSavedNewsByUser } = require("./savedNewsController");


const router = require("express").Router();

router.post('/saved',auth("reader"),createSavedNews);
router.get('/saved',auth("reader"),getSavedNewsByUser);

module.exports.SavedNewsRouter = router;
