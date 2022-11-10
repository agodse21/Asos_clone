const mongoose = require("mongoose");
const cartproductSchema = mongoose.Schema({
  person_id: { type: String, required: true },
  product_id: { type: String },
  product_details: {
    product_img: String,
    product_price: String,
    product_name: String,
    product_color: String,
  },
  item_no: { type: Number, required: true },
  size: { type: String },
});
const cartproductModuel = mongoose.model("cartproduct", cartproductSchema);
module.exports = { cartproductModuel };
