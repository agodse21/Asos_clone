const { Router } = require("express");
const { ProfileController } = require("../controller/userprofile.controller");
const { authentication } = require("../middleware/authentication.middleware");
const { authorization } = require("../middleware/authorization.middleware");
const UserProfilerouter = Router();
UserProfilerouter.get("/", authentication, ProfileController.getProfile);
UserProfilerouter.patch(
  "/editProfile/:id",
  authentication,

  ProfileController.editProfile
);

module.exports = { UserProfilerouter };
