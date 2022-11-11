
import * as types from "./acttionTypes"
import axios from "axios"

const getProduct = (products) => ({
    type: types.GET_PRODUCT,
    payload: products
})

// const getGrid=(Gridproducts)=>({
//     type:types.GET_GRID,
//     payload:Gridproducts

// })

let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNmRmNGM1MWI1OTFkOWY1NmY3MWVlNSIsImVtYWlsIjoiYW1vbEBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJhbW9sIiwibGFzdG5hbWUiOiJnb2RzZSIsInBhc3N3b3JkIjoiJDJiJDA0JGZncm5YcC42ZS96QXhrMGt3T2w4NE9Tb3J3bkdQTzI4QVhrVXU3dU51OE1KckQ5SzVQVVZ1IiwiZG9iIjoiMjQtMy0yMDIyIiwiaW50ZXJlc3QiOiJ5ZXMiLCJfX3YiOjB9LCJpYXQiOjE2NjgxNTQxMTh9.zn0YdLwze8q1fwwCFd07YQmRGyfjLCM9rFJOHkTcrOw"
export const loadProduct = (type,cate) => {
    return function (dispatch) {
        axios.get(`https://asos-backend.onrender.com/${type}product/${cate}`,
        {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        ).then(res => {
            // console.log("RESPONSE", res.data.data)
            dispatch(getProduct(res.data.data))
            dispatch({type: "CART", payload: "earrings"})
        }).catch(er => {
            console.log("ERROR",er)
        })
    }

}

export const loadProductWithQuery = (type,page,limt) => {
    return function (dispatch) {
        axios.get(`https://asos-backend.onrender.com/${type}product?page=${page}&limit=${limt}`,
        {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        ).then(res => {
            // console.log("RESPONSE", res.data.data)
            dispatch(getProduct(res.data.data))
            dispatch({type: "CART", payload: "earrings"})
        }).catch(er => {
            console.log("ERROR",er)
        })
    }

}