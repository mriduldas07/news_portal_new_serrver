const { News } = require("../app/news/news.modal");
const { UserReading } = require("../app/userReading/userReading.model");
const {
  createUserReading,
} = require("../app/userReading/userReadingController");

module.exports.viewsCount = async (req, res, next) => {
  const { id } = req.params;
  const { role, _id } = req.user.user;
  const news = await News.findById(id).lean();
  if (role === "reader") {
    const views = parseInt(news?.total_view) + 1;

    const newData = { ...news, total_view: views };
    await News.findOneAndUpdate({ _id: id }, newData, {
      new: true,
    });

    const data = {
      readedBy: _id,
      myNews: id,
    };
    await UserReading.create(data);
  }

  next();
};
