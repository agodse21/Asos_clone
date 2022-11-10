const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretkey = process.env.SECRET_KEY;
const adminkey = process.env.ADMIN;
const authentication = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, secretkey, (err, decoded) => {
      if (decoded) {
        req.body.user_id = decoded?.user?._id;
        req.body.user_email = decoded?.user?.email;
        console.log("user decoded");

        next();
      } else {
        jwt.verify(token, adminkey, async (err, decoded) => {
          if (decoded) {
            console.log("admin auth decoded");
            req.body = decoded;
            next();
          } else {
            console.log("admin err");
            return res
              .status(401)
              .send({ error: "you are not authenticated person" });
          }
        });
      }
    });
  } else {
    console.log(" token is not for authentication");
    return res.status(401).send({ error: "you are not authenticated" });
  }
};
module.exports = { authentication };
