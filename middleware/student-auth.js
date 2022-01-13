const jwt = require("jsonwebtoken");

let secret = "this is TCS";

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const result = await jwt.verify(token, secret);
    req.user = result;
    next();
  } catch (error) {
    res.send("Authentication Error");
  }
};

