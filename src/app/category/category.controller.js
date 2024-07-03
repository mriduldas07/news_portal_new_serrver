const { Category } = require("./category.model");

module.exports.createCategory = async (req, res) => {
  const { ...categoryData } = req.body;
  const { _id } = req.user.user;
  const data = { ...categoryData, createdBy: _id };
  const result = await Category.create(data);
  res.status(201).json(result);
};
module.exports.getAllCategory = async (req, res) => {
  const result = await Category.find();
  res.status(200).json(result);
};
