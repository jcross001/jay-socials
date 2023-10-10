import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("User not logged In");
  }
  jwt.verify(token, "nbf3o2oa9", (err, user) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }
    req.user = user;
    next();
  });
};
