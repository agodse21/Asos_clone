const { Router } = require("express");
// const { WomenProductController } = require("../controller/product.controller");
const {
  WomenProductController,
} = require("../controller/womenproduct.controller");
const { authentication } = require("../middleware/authentication.middleware");
const { authorization } = require("../middleware/authorization.middleware");
const WomenProductrouter = Router();
WomenProductrouter.get("/", authentication, WomenProductController.getProduct);
WomenProductrouter.get(
  "/:category/:id",
  authentication,
  WomenProductController.getProductDetails
);
WomenProductrouter.get(
  "/:category",
  authentication,
  WomenProductController.getProductCategory
);
WomenProductrouter.post(
  "/addproduct",
  authentication,
  authorization,
  WomenProductController.addProduct
);
WomenProductrouter.patch(
  "/editproduct/:id",
  authentication,
  authorization,
  WomenProductController.editProduct
);
WomenProductrouter.delete(
  "/deleteproduct/:id",
  authentication,
  authorization,
  WomenProductController.deleteProduct
);
module.exports = { WomenProductrouter };
