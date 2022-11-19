import axios from "axios";
import * as types from "./actionTypes";
// let usertoken = JSON.parse(localStorage.getItem("token")) || "";

let userData = JSON.parse(localStorage.getItem("userdata")) || [];
let usertoken = userData.token;

export const getWishListdata = () => dispatch => {
  dispatch({ type: types.GET_WISHLISTDATA_REQUEST });

  return axios
    .get("https://asos-backend.onrender.com/wishlist", {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
      console.log("amol:", r.data.data);
      dispatch({ type: types.GET_WISHLISTDATA_SUCCESS, payload: r.data.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_WISHLISTDATA_FAIL });
    });
};
export const deleteWishListdata = (id) => (dispatch) => {
  console.log(id)
  dispatch({ type: types.DELETE_WISHLISTDATA_REQUEST });
  return axios
    .delete(`https://asos-backend.onrender.com/wishlist/${id}`, {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
      console.log("delete",r)
      dispatch({ type: types.DELETE_WISHLISTDATA_SUCCESS ,payload:id});
      // dispatch(getWishListdata())
    })
    .catch((err) => 
    // dispatch({ type: types.DELETE_WISHLISTDATA_FAIL })
    console.log("deleteerrrr",err)
    );
};
export const updateWishLisdata = (el, id) => (dispatch) => {
  dispatch({ type: types.UPDATE_WISHLIST_REQUEST });
  return axios
    .patch(`https://asos-backend.onrender.com/wishlist/${id}`, el, {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
      console.log(r);
      // getaddcartdata();
      dispatch({ type: types.UPDATE_WISHLIST_SUCCESS, payload: { el, id } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.UPDATE_WISHLIST_FAIL });
    });
};

// export const CleanWishList=()=>dispatch=>{
//   return axios
//   .delete(`https://asos-backend.onrender.com/cart/deleteall/cartdata`,{
//     headers: {
//       Authorization: `Bearer ${usertoken}`,
//     },
//   }).then((re)=>{
//    getWishListdata()
//   })
// }