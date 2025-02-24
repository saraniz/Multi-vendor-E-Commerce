import { FETCH_ALLPRODUCT_FAILURE, FETCH_ALLPRODUCT_REQUEST, FETCH_ALLPRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./productActionType";

  
  const initialState = {
    allproducts:[],
    product: null,
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCT_SUCCESS:
        return { ...state, loading: false, product: action.payload };
      case FETCH_PRODUCT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case FETCH_ALLPRODUCT_REQUEST:
        return{...state,loading:true,error:null};
      case FETCH_ALLPRODUCT_SUCCESS:
        return {...state,loading:false,allproducts:action.payload};
      case FETCH_ALLPRODUCT_FAILURE:
        return{...state,loading:false,error:action.payload};
      default:
        return state;
    }
  };
  
  
  export default productReducer;
  