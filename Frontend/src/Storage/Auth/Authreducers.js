import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  SELLER_REGISTER_SUCCESS,
  SELLER_REGISTER_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from "./AuthActionType";

const initialState = {
  user: null,
  loading: null,
  error: null,
  jwt: localStorage.getItem("jwt") || null, // <-- persist JWT on refresh
  isSeller: false,
  forgotPasswordMessage: null, // ✅ for status message
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case GET_USER_REQUEST:
    case LOGIN_USER_REQUEST:
    case FORGOT_PASSWORD_REQUEST: // ✅ added
      return { ...state, loading: true, error: null };

    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, error: null, jwt: action.payload.jwt };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jwt: action.payload.jwt,
        user: action.payload.user,
      };

    case GET_USER_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload.user };

    case SELLER_REGISTER_SUCCESS:
      return {
        ...state,
        isSeller: true,
        user: { ...state.user, role: "seller" },
        loading: false,
        error: null,
      };

    case SELLER_REGISTER_FAIL:
      return {
        ...state,
        isSeller: false,
        sellerError: action.payload,
        loading: false,
      };

    case UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };

    case UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };

    case UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FORGOT_PASSWORD_SUCCESS: // ✅ added
      return {
        ...state,
        loading: false,
        error: null,
        forgotPasswordMessage: action.payload,
      };

    case FORGOT_PASSWORD_FAILURE: // ✅ added
      return {
        ...state,
        loading: false,
        error: action.payload,
        forgotPasswordMessage: null,
      };

    case REGISTER_USER_FAILURE:
    case GET_USER_FAILURE:
    case LOGIN_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
