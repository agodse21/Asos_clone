const mongoose = require("mongoose");
const menproductSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  mainImage: { type: String },
  backImage: {
    type: String,
  },
  sideImage: {
    type: String,
  },
  productDetails: {
    type: String,
  },
  brand: {
    type: String,
  },
  category: { type: String },
  size: { type: String },
  aboutme: { type: String },
  color: { type: String },
  Lookafterme: {
    type: String,
  },
});
const menproductModel = mongoose.model("menproducts", menproductSchema);
module.exports = { menproductModel };
