const jwt = require("jsonwebtoken");

module.exports.createToken = (user) => {
  const token = jwt.sign(
    {
      user,
    },
    "newsportal",
    {
      expiresIn: "7d",
    }
  );
  let role = null;
  if (user.role) {
    role = user.role;
  }
  const response = {
    token,
    role,
  };
  return response;
};

module.exports.auth =
  (...requiredRoles) =>
  async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json("You are not authorized");
      }
      let verifiedUser = null;
      verifiedUser = jwt.verify(token, "newsportal");

      if (
        requiredRoles.length &&
        !requiredRoles.includes(verifiedUser.user.role)
      ) {
        return res.status(400).json("You are not authorized");
      }

      req.user = verifiedUser;

      next();
    } catch (error) {}
  };
