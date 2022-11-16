import * as types from "./actionTypes";

const initialstate = {
  data: [],
  err: false,
  loading: true,
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case types.GET_CARTDATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_CARTDATA_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
      };
    }
    case types.GET_CARTDATA_FAIL: {
      return {
        ...state,
        err: true,
        loading: true,
        data: [],
      };
    }
    case types.GET_ADDCART_REQUEST: {
      return {
        ...state,
      };
    }
    case types.GET_ADDCART_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.GET_ADDCART_FAIL: {
      return {
        ...state,
      };
    }
    case types.DELETE_CARTDATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.DELETE_CARTDATA_SUCCESS: {
      const newdata = state.data.filter((el) => el.product_id != payload);
      return {
        ...state,
        data: newdata,
        loading: false,
      };
    }
    case types.DELETE_CARTDATA_FAIL: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.UPDATE_CART_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.UPDATE_CART_SUCCESS: {
      const { el, id } = payload;
      const newdata = state.data.map((e) =>
        e.product_id == id ? { ...e, item_no: el.item_no, size: el.size } : e
      );
      console.log(newdata);
      return {
        ...state,
        data: newdata,
        loading: false,
      };
    }
    case types.UPDATE_CART_FAIL: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
};
