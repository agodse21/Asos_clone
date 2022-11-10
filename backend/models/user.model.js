const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: String,
  password: { type: String, required: true },
  dob: String,
  interest: String,
});
const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
