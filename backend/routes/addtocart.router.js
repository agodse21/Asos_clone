const { Router } = require("express");
const { AddtocartController } = require("../controller/addtocart.controller");
const { authentication } = require("../middleware/authentication.middleware");
const addtoCartRotuer = Router();
addtoCartRotuer.get("/", authentication, AddtocartController.getcart);
addtoCartRotuer.patch("/:id", authentication, AddtocartController.updatecart);
addtoCartRotuer.post("/addcart", authentication, AddtocartController.addcart);
addtoCartRotuer.delete("/:id", authentication, AddtocartController.deletecart);
module.exports = { addtoCartRotuer };
