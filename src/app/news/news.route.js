const { auth } = require("../../middleware/auth");
const { viewsCount } = require("../../middleware/viewCount");
const {
  createNews,
  getAllNews,
  getSingleNews,
  getAllReporterNews,
  updateNews,
  deleteNews,
} = require("./news.controller");

const router = require("express").Router();

router.post("/create-news", auth("reporter"), createNews);
router.get(
  "/news/:id",
  //   auth("reader", "reporter", "editor",),
  viewsCount,
  getSingleNews
);
router.patch("/news/:id", auth("editor", "reporter"), updateNews);
router.delete("/news/:id", auth("editor"), deleteNews);
router.get("/news", getAllNews);
router.get("/news-reporter", auth("reporter"), getAllReporterNews);

module.exports.NewsRouter = router;
