import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  FETCH_ALLPRODUCT_FAILURE,
  FETCH_ALLPRODUCT_REQUEST,
  FETCH_ALLPRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE
} from "./productActionType";

const initialState = {
  allproducts: [],
  product: null,
  loading: false,
  error: null,
  successMessage: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // 🔁 Fetching single product
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };

    case FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // 🔁 Fetching all products
    case FETCH_ALLPRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_ALLPRODUCT_SUCCESS:
      return { ...state, loading: false, allproducts: action.payload };

    case FETCH_ALLPRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ➕ Add product
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        successMessage: null,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        allproducts: [...state.allproducts, action.payload],
        successMessage: "Product added successfully!",
      };

    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        successMessage: null,
      };

    // ✏️ Update product
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        successMessage: null,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        allproducts: state.allproducts.map((product) =>
          product.prisma_id === action.payload.prisma_id ? action.payload : product
        ),
        successMessage: "Product updated successfully!",
      };

    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        successMessage: null,
      };

    default:
      return state;
  }
};

export default productReducer;
