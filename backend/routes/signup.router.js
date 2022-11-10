const { Router } = require("express");
const bcrypt = require("bcrypt");
const { userModel } = require("../models/user.model");
const signuprouter = Router();

signuprouter.post("/", async (req, res) => {
  const { email, password, firstname, lastname, dob, interest } = req?.body;
  const isuser = await userModel.findOne({ email });
  if (isuser) {
    return res.status(400).send({
      error: "users already exist please try another email",
    });
  }
  bcrypt.hash(password, 4, async (err, hash) => {
    if (err) {
      return res
        .status(400)
        .send({ error: "something went wrong in hash the password" });
    }
    let newuser = await userModel({
      email,
      firstname,
      lastname,
      dob,
      interest,
      password: hash,
    });
    try {
      await newuser.save();
      return res.send({ msg: "signup successful!" });
    } catch (err) {
      console.log(err.message);
      return res.status(400).send({ error: "signup failed" });
    }
  });
});
module.exports = { signuprouter };
