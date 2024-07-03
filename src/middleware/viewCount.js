const { News } = require("../app/news/news.modal");

module.exports.viewsCount = async (req, res, next) => {
  const { id } = req.params;
  const news = await News.findById(id).lean();
  const views = parseInt(news?.total_view) + 1;

  const newData = { ...news, total_view: views };
  await News.findOneAndUpdate({ _id: id }, newData, {
    new: true,
  });

  next();
};
