import * as types from "./acttionTypes";
import axios from "axios";

const getProduct = (products) => ({
  type: types.GET_PRODUCT,
  payload: products,
});

// const getGrid=(Gridproducts)=>({
//     type:types.GET_GRID,
//     payload:Gridproducts

// })

let userData= JSON.parse(localStorage.getItem('userdata'))||[];
let token=userData.token;
console.log(userData.token)
export const loadProduct = (type, cate) => {
  return function (dispatch) {
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
      });
  };
};

export const SortProduct = (type, cate) => {
  return function (dispatch) {
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
      });
  };
};

export const searchProduct=(query)=>dispatch=>{
axios.get(`https://asos-backend.onrender.com/womenproduct/?product_name=${query}`,{
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((r)=>{
  console.log(r.data)
 dispatch({type: "SEARCH_ITEM", payload:{data: r.data.data,query:query}})
}).catch(e=>console.log(e))

} 

export const loadProductWithQuery = (type, page, limt) => {
  return function (dispatch) {
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
        console.log("ERROR", er);
      });
  };
};

export const Addtocart = (data) => (dispatch) => {
  console.log("addtocart", data);
  axios
    .post("https://asos-backend.onrender.com/cart/addcart", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => console.log("data added"))
    .catch((err) => {
      console.log(err);
    });
};

export const SwitchTab = (type) => {
  loadProduct(type);
};
