const { News } = require("./news.modal");

module.exports.createNews = async (req, res) => {
  const { ...newsData } = req.body;
  const { _id } = req.user.user;
  const data = { ...newsData, author: _id };
  const result = await News.create(data);
  res.status(201).json(result);
};
module.exports.getAllNews = async (req, res) => {
  const result = await News.find().populate("author").populate("category");
  res.status(201).json(result);
};
module.exports.getSingleNews = async (req, res) => {
  const { id } = req.params;
  const result = await News.findById(id)
    .populate("author")
    .populate("category");
  res.status(200).json(result);
};
module.exports.getAllReporterNews = async (req, res) => {
  const { _id } = req.user.user;
  const result = await News.find({ author: _id }).populate("author");
  res.status(200).json(result);
};
module.exports.updateNews = async (req, res) => {
  const { _id, role } = req.user.user;
  const { id } = req.params;
  const { others_info, ...data } = req.body;

  const updatedNews = { ...data };

  if (others_info && Object.keys(others_info).length > 0) {
    Object.keys(others_info).forEach((key) => {
      const infoKey = `others_info.${key}`;
      updatedNews[infoKey] = others_info[key];
    });
  }

  let result;
  if (role === "reporter") {
    result = await News.findOneAndUpdate(
      { _id: id, author: _id },
      updatedNews,
      {
        new: true,
      }
    );
  }
  if (role === "editor") {
    result = await News.findOneAndUpdate({ _id: id }, updatedNews, {
      new: true,
    });
  }
  res.status(200).json(result);
};

module.exports.deleteNews = async (req, res) => {
  const { id } = req.params;
  const result = await News.findByIdAndDelete(id);
  res.status(200).json(result);
};
