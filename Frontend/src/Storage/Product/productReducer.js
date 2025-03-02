import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, FETCH_ALLPRODUCT_FAILURE, FETCH_ALLPRODUCT_REQUEST, FETCH_ALLPRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./productActionType";

  
  const initialState = {
    allproducts:[],
    product: null,
    loading: false,
    error: null,
    successMessage: null,
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
      
      case ADD_PRODUCT_REQUEST:
        return{
          ...state,
          loading: false,
          successMessage: null,
        }
      
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          allproducts: [...state.allproducts, action.payload], // Adds the newly added product to the list of all products
          successMessage: 'Product added successfully!', // Success message after adding product
        };

      case ADD_PRODUCT_FAILURE:
        return {...state,loading:false, error:action.payload, successMessage:null}
      default:
        return state;
    }
  };
  
  
  export default productReducer;
  