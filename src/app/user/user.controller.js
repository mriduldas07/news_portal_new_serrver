const { createToken } = require("../../middleware/auth");
const { User } = require("./user.modal");

module.exports.createUser = async (req, res) => {
  const { ...user } = req.body;
  const isExsits = await User.findOne({ email: user.email }).lean();

  if (isExsits?._id) {
    const response = createToken(isExsits);
    const newData = { ...response, role: isExsits.role };
    return res.status(200).json(newData);
  }
  const result = await User.create(user);
  const response = createToken(result);
  return res.status(201).json(response);
};
