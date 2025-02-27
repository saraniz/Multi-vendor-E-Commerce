import axios from 'axios';
import { ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE, FETCH_CART_ITEMS, FETCH_CART_FAILURE, FETCH_CART_SUCCESS, REMOVE_FROM_CART, REMOVE_FROM_CART_SUCCESS } from './cartactionType';
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../APIConfig';
import { FETCH_ALLPRODUCT_SUCCESS } from '../Product/productActionType';


export const addToCart = (productId, quantity) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });

  try {
    const token = localStorage.getItem("jwt"); // Retrieve the JWT token from localStorage
    console.log("Token retrieved:", token); // Debugging: Log the token

    if (!token) {
      console.error("No token found. User might not be logged in.");
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please log in to add items to your cart",
        showConfirmButton: true, // Show a confirm button
        confirmButtonText: "Log In", // Set the button text
        showCancelButton: false, // Hide the cancel button
        timer: 3000, // Auto-close after 3 seconds
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to the login page if the user clicks "Log In"
          window.location.href = "/LoginPage";
        }
      });
      throw new Error("No token found. Please log in.");
    }

    // Ensure productId is an integer
    const productIdInt = parseInt(productId, 10);
    if (isNaN(productIdInt)) {
      throw new Error("Invalid productId. Expected a number.");
    }

    // Send the request to add the item to the cart
    const response = await axios.post(`http://localhost:2000/api/cart/add`, {
      productId: productIdInt, // Pass productId as an integer
      quantity,
    }, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the request
      },
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added to cart successfully",
      showConfirmButton: false,
      timer: 1500
    });

    console.log("Backend response:", response.data); // Debugging: Log the response
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: response.data.cartItem });
  } catch (error) {
    console.error("Error adding item to cart:", error); // Debugging: Log the error

    if (error.response && error.response.status === 401) {
      console.error("Token is expired or invalid. Redirecting to login...");
      // Clear the token and redirect to login
      localStorage.removeItem("jwt");
      window.location.href = "/LoginPage"; // Redirect to the login page
    }

    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: error.response ? error.response.data.error : error.message,
    });
  }
};

//fetch cart items
export const fetchCartItems = () => async(dispatch) =>{
  try{
    const token = localStorage.getItem("jwt")
    if(!token) throw new Error("User not authenticated")

    const { data } = await axios.get(`${API_BASE_URL}/api/cart/viewCart`,{
      headers:{Authorization:`Bearer ${token}`},
    })

    dispatch({type:FETCH_CART_SUCCESS,payload:data.cartItems})
  } catch(error){
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong"
    dispatch({type:FETCH_CART_FAILURE,payload:errorMessage})
  }
}


export const deleteFromCart = (cart_id,product_id) => async (dispatch, getState) => {
  try {
      const { userLogin } = getState(); // Access user data from Redux state

      // Get reg_id from userLogin or fallback to localStorage
    
      const token = localStorage.getItem("jwt"); // Get JWT token from localStorage
      if (!token) {
          throw new Error("User not authenticated");
      }

      const config = {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include token in headers
          },
          data: { cart_id,product_id }, // Include reg_id and product_id
      };

      // Send request to delete the product from the cart
      await axios.delete(`${API_BASE_URL}/api/cart/delete`, config);

      // Dispatch action to update the cart
      dispatch({
          type: REMOVE_FROM_CART_SUCCESS,
          payload: product_id, // Payload will be the product_id
      });

      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item removed from cart",
          showConfirmButton: false,
          timer: 1500,
      });
  } catch (error) {
      console.error("Error removing product from cart:", error);
  }
};
