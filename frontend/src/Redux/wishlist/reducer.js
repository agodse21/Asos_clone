import * as types from "./actionTypes";

const initialstate = {
  WishListdata: [],
  err: false,
  loading: true,
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case types.GET_WISHLISTDATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_WISHLISTDATA_SUCCESS: {
      return {
        ...state,
        WishListdata: payload,
        loading: false,
      };
    }
    case types.GET_WISHLISTDATA_FAIL: {
      return {
        ...state,
        err: true,
        loading: true,
        WishListdata: [],
      };
    }
    case types.GET_ADDWISHLIST_REQUEST: {
      return {
        ...state,
      };
    }
    case types.GET_ADDWISHLIST_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.GET_ADDWISHLIST_FAIL: {
      return {
        ...state,
      };
    }
    case types.DELETE_WISHLISTDATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.DELETE_WISHLISTDATA_SUCCESS: {
      const newdata = state.WishListdata.filter((el) => el.product_id != payload);
      console.log("dlete wishloisi",newdata)
      return {
        ...state,
        WishListdata: newdata,
        loading: false,
      };
    }
    case types.DELETE_WISHLISTDATA_FAIL: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.UPDATE_WISHLIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.UPDATE_WISHLIST_SUCCESS: {
      const { el, id } = payload;
      const newdata = state.data.map((e) =>
        e.product_id == id ? { ...e, item_no: el.item_no, size: el.size } : e
      );
      console.log(newdata);
      return {
        ...state,
        WishListdata: newdata,
        loading: false,
      };
    }
    case types.UPDATE_WISHLIST_FAIL: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
};
