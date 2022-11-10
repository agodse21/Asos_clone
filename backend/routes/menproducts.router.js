const { Router } = require("express");
const {
  menproductsController,
} = require("../controller/menproduct.controller");
const { authentication } = require("../middleware/authentication.middleware");
const { authorization } = require("../middleware/authorization.middleware");
const menproductRouter = Router();
menproductRouter.get("/", authentication, menproductsController.getProduct);
menproductRouter.get(
  "/:category/:id",
  authentication,
  menproductsController.getProductDetails
);
menproductRouter.get(
  "/:category",
  authentication,
  menproductsController.getProductCategory
);
menproductRouter.post(
  "/addproduct",
  authentication,
  authorization,
  menproductsController.addProduct
);
menproductRouter.patch(
  "/editproduct/:id",
  authentication,
  authorization,
  menproductsController.editProduct
);
menproductRouter.delete(
  "/deleteproduct/:id",
  authentication,
  authorization,
  menproductsController.deleteProduct
);
module.exports = { menproductRouter };
