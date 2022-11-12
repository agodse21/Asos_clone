import axios from "axios";
import * as types from "./actionTypes";
// let usertoken = JSON.parse(localStorage.getItem("token")) || "";
var usertoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNmE3MjNkOWU3OTFhNTViN2M2NmZlMSIsImVtYWlsIjoiYWJoaXNoZWtAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoiYWJoaXNoZWsiLCJsYXN0bmFtZSI6ImFkaXR5YSIsInBhc3N3b3JkIjoiJDJiJDA0JFE1anBwWS5JOUdreXBLWmNiNC9DTXVDekJweDZWMUI1ckIzUXdwZTlvYTAwalE3NDhQRXh5IiwiZG9iIjoiMjQtMDItMjAwMyIsImludGVyZXN0Ijoid29tZW53ZWFyIiwiX192IjowfSwiaWF0IjoxNjY4MjYzNjg3fQ.FJjvmyg1IwYnAkWYj6-z8-t8l2v4Wu3GhmMfziQwO7k";

export const getaddcartdata = () => (dispatch) => {
  dispatch({ type: types.GET_CARTDATA_REQUEST });

  return axios
    .get("https://asos-backend.onrender.com/cart", {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
      console.log(r.data.data);
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
        "Content-Type": "application/json",
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
      console.log(r);
      // getaddcartdata();
      dispatch({ type: types.UPDATE_CART_SUCCESS, payload: { el, id } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.UPDATE_CART_FAIL });
    });
};
