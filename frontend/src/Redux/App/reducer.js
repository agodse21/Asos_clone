import * as types from "./acttionTypes"


const initialState={
    products:[],
    Gridproducts:[],
    product:{},
    loading:true
}


const reducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
            
            return{
                ...state,
                products:action.payload,
                loading:false
            }
           
        
        default:
            return state
    }
   
}
export  {reducers};