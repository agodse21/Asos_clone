import * as types from "./acttionTypes";
import axios from "axios";
import { getaddcartdata } from "../Addtocart/action";
import { getWishListdata } from "../wishlist/action";

const getProduct = (products) => ({
  type: types.GET_PRODUCT,
  payload: products,
});

// const getGrid=(Gridproducts)=>({
//     type:types.GET_GRID,
//     payload:Gridproducts

// })

let userData = JSON.parse(localStorage.getItem("userdata")) || [];
let token = userData.token;
console.log(userData.token);
export const loadProduct = (type, cate) => {
  return function (dispatch) {
    dispatch({ type: "REQUEST_PRODUCT" });
    axios
      .get(`https://asos-backend.onrender.com/${type}product/${cate}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("RESPONSE", res.data.data)
        dispatch(getProduct(res.data.data));
        // dispatch({type: "CART", payload: "earrings"})
      })
      .catch((er) => {
        console.log("ERROR", er);
        dispatch({ type: "REQUEST_PRODUCT" });
      });
  };
};

export const searchProduct = (query) => (dispatch) => {
  dispatch({ type: "REQUEST_PRODUCT" });
  axios
    .get(
      `https://asos-backend.onrender.com/womenproduct/?product_name=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((r) => {
      console.log(r.data);
      dispatch({
        type: "SEARCH_ITEM",
        payload: { data: r.data.data, query: query },
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: "REQUEST_PRODUCT" });
    });
};

export const loadProductWithQuery = (type, page, limt) => {
  return function (dispatch) {
    dispatch({ type: "REQUEST_PRODUCT" });
    // https://asos-backend.onrender.com/?product_name=${shs}&category=sale
    axios
      .get(
        `https://asos-backend.onrender.com/${type}product?page=${page}&limit=${limt}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log("RESPONSE", res.data.data)
        dispatch(getProduct(res.data.data));
        // dispatch({type: "CART", payload: "earrings"})
      })
      .catch((er) => {
        dispatch({ type: "REQUEST_PRODUCT" });
        console.log("ERROR", er);
      });
  };
};

export const Addtocart = (data) => (dispatch) => {
  console.log("addtocart", data);
  dispatch({ type: "REQUEST_PRODUCT" });
  axios
    .post("https://asos-backend.onrender.com/cart/addcart", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => {
      dispatch(getaddcartdata());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "REQUEST_PRODUCT" });
    });
};
export const AddtoWishList = (data) => (dispatch) => {
  // console.log("wishlist", data);
  // dispatch({ type: "REQUEST_PRODUCT" });
  axios
    .post("https://asos-backend.onrender.com/wishlist/addwishlist", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => {
      console.log(r)
      dispatch(getWishListdata());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "REQUEST_PRODUCT" });
    });
};

export const SwitchTab = (type) => {
  loadProduct(type);
};
