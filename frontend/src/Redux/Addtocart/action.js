import axios from "axios";
import * as types from "./actionTypes";
// let usertoken = JSON.parse(localStorage.getItem("token")) || "";

let userData = JSON.parse(localStorage.getItem("userdata")) || [];
let usertoken = userData.token;

export const getaddcartdata = () => dispatch => {
  dispatch({ type: types.GET_CARTDATA_REQUEST });

  return axios
    .get("https://asos-backend.onrender.com/cart", {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
     
      dispatch({ type: types.GET_CARTDATA_SUCCESS, payload: r.data.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CARTDATA_FAIL });
    });
};
export const deletecartdata = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CARTDATA_REQUEST });
  return axios
    .delete(`https://asos-backend.onrender.com/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
      dispatch({ type: types.DELETE_CARTDATA_SUCCESS, payload: id });
    })
    .catch((err) => dispatch({ type: types.DELETE_CARTDATA_FAIL }));
};
export const updatecartdata = (el, id) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_REQUEST });
  return axios
    .patch(`https://asos-backend.onrender.com/cart/${id}`, el, {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
    
      // getaddcartdata();
      dispatch({ type: types.UPDATE_CART_SUCCESS, payload: { el, id } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.UPDATE_CART_FAIL });
    });
};

export const CleanCart=()=>dispatch=>{
  return axios
  .delete(`https://asos-backend.onrender.com/cart/deleteall/cartdata`,{
    headers: {
      Authorization: `Bearer ${usertoken}`,
    },
  }).then((re)=>{
    getaddcartdata()
  })
}