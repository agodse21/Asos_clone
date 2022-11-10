const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const getProfile = async (req, res) => {
  const { user_id } = req?.body;
  let value = await userModel.findOne({ _id: user_id });
  console.log(value);

  return res.send("i am profile page");
};
const editProfile = async (req, res) => {
  const user_id = req?.body?.user_id;
  // const user_email = req?.body?.user_email;
  const { dob, interest, firstname, lastname, password, email } = req?.body;
  const hash_password = await bcrypt.hash(password, 4);
  await userModel.findOneAndUpdate(
    { _id: user_id },
    { email, password: hash_password, firstname, lastname, dob, interest },
    { new: true }
  );
  try {
    return res.send({ msg: "Profile updated successfully" });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "something went wrong in profile section" });
  }
};
const ProfileController = {
  getProfile,
  editProfile,
};
module.exports = { ProfileController };
