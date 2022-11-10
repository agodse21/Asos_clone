// const { Router } = require("express");
// const { ProductController } = require("../controller/product.controller");
// const { authentication } = require("../middleware/authentication.middleware");
// const { authorization } = require("../middleware/authorization.middleware");
// const ProductRouter = Router();
// ProductRouter.get("/", authentication, ProductController.getProduct);
// ProductRouter.get("/:id", authentication, ProductController.getProductDetails);
// ProductRouter.post(
//   "/addproduct",
//   authentication,
//   authorization,
//   ProductController.addProduct
// );
// ProductRouter.patch(
//   "/editproduct/:id",
//   authentication,
//   authorization,
//   ProductController.editProduct
// );
// ProductRouter.delete(
//   "/deleteproduct/:id",
//   authentication,
//   authorization,
//   ProductController.deleteProduct
// );
// module.exports = { ProductRouter };
