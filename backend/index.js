const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { UserProfilerouter } = require("./routes/userProfile.router");
const { loginRouter } = require("./routes/login.router");
const { signuprouter } = require("./routes/signup.router");
const { ProductRouter } = require("./routes/product.router");
const { addtoCartRotuer } = require("./routes/addtocart.router");
require("dotenv").config();
const port_no = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/login", loginRouter);
app.use("/signup", signuprouter);
app.use("/user", UserProfilerouter);
app.use("/product", ProductRouter);
app.use("/cart", addtoCartRotuer);
app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(port_no, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err.message);
  }
  console.log("listening on port no", port_no);
});
