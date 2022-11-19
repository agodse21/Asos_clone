const { menproductModel } = require("../models/menProduct.model");

const getProduct = async (req, res) => {
  // let value = req.query;
  // res.send(value);
  var q = req?.query;

  if (
    q.category ||
    q.brand ||
    q.product_name ||
    q.sort_price ||
    (q.page && q.limit)
  ) {
    let name;
    let category;
    let brand;
    let page = q.page;
    let limit = q.limit;

    // q.sort_price;
    q.product_name
      ? (name = { name: { $regex: "^" + q.product_name, $options: "i" } })
      : (name = null);
    q.category
      ? (category = { category: { $regex: "^" + q.category, $options: "i" } })
      : (category = null);

    q.brand
      ? (brand = { brand: { $regex: "^" + q.brand, $options: "i" } })
      : (brand = null);
    // let value = { category };
    let value = [category, brand, name];
    let newvalue = value.filter((el) => el != null);
 

    // console.log(...value);
    if (newvalue.length > 0) {
      let data = await menproductModel
        .find({ $and: [...newvalue] })
        .skip((page - 1) * limit)
        .limit(limit);
      try {
        return res.send({ data: data });
      } catch (err) {
        return res.status(400).send({ error: err.message });
      }
    } else {
      let data = await menproductModel
        .find()
        .skip((page - 1) * limit)
        .limit(limit);

      try {
        return res.send({ data: data });
      } catch (err) {
        return res.status(400).send({ error: err.message });
      }
    }
  } else {
    let data = await menproductModel.find();
    try {
      return res.send({ data: data });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
};
const getProductDetails = async (req, res) => {
  const category = req?.params?.category;
  const id = req?.params?.id;
  // res.send(params);
  const value = await menproductModel.findOne({ category, id });
  try {
    return res.send({ data: value });
  } catch (err) {
    return res.send({ msg: "no data" });
  }
};
const getProductCategory = async (req, res) => {
  const { category } = req.params;
  console.log("category", category);
  const value = await menproductModel.find({ category: category });
  return res.send({ data: value });
};
const addProduct = async (req, res) => {
  res.send("products addded");
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await menproductModel.findOneAndDelete({ id });
  try {
    return res.send({ msg: "deleted successfully" });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};
const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, category, size, brand, aboutme } = req?.body;
  try {
    await menproductModel.findOneAndUpdate(
      { id },
      { name, price, category, size, brand, aboutme }
    );
    return res.send({ msg: "updated successfully" });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};
const menproductsController = {
  getProduct,
  getProductDetails,
  getProductCategory,
  addProduct,
  deleteProduct,
  editProduct,
};
module.exports = { menproductsController };
