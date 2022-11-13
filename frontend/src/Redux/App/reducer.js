import * as types from "./acttionTypes"


const initialState={
    products:[],
    Gridproducts:[],
    product:{},
    loading:true,
    cart:[],
    searchProd:[],
    searchQuery:""
}


const reducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
            
            return{
                ...state,
                products:action.payload,
                loading:false
            }
        case types.CART:
            return {
                ...state,
                cart:action.payload,
            }
            case types.SEARCH_ITEM:
            return {
                ...state,
                searchProd:action.payload.data,searchQuery:action.payload.query
            }
        
        default:
            return state
    }
   
}
export  {reducers};