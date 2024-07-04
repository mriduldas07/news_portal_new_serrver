const { UserReading } = require("./userReading.model");

module.exports.getUserReading = async (req, res) => {
  const { _id } = req.user.user;
  const result = await UserReading.find({ readedBy: _id }).populate({
    path: "myNews",
    populate: [
      {
        path: "category",
      },
    ],
  });
  res.status(200).json(result);
};
