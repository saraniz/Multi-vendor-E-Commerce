import { FAVORITES_LOADING,ADD_FAVORITE_SUCCESS,ADD_FAVORITE_FAILURE,ADD_FAVORITE_REQUEST, REMOVE_FAVORITE_REQUEST, REMOVE_FAVORITE_SUCCESS, FETCH_FAVORITES_REQUEST, FETCH_FAVORITES_SUCCESS, REMOVE_FAVORITE_FAILURE, FETCH_FAVORITES_FAILURE } from "./favActionType";
import { api,API_BASE_URL } from "../APIConfig";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify"; // ✅ import toast


//action for add a favorite product
export const addFavorite = (reg_id,product_id) => async (dispatch) =>{
    dispatch({type: FAVORITES_LOADING})

    try{
        const { data } = await axios.post(`${API_BASE_URL}/api/fav/addfav`,{
            reg_id,
            product_id
        })

        dispatch({type:ADD_FAVORITE_SUCCESS,payload:data})

toast.success("Item added to Favorite successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    
        console.log("Product added to favorites successfully:", data)
    } catch(error){
        const errorMessage =
        error.response?.data?.message || error.message || "Something went wrong!";
  
      // Dispatch failure action with error message
      dispatch({ type: ADD_FAVORITE_FAILURE, payload: errorMessage });
  
      // Show error message using SweetAlert
      toast.error("Failed to Add Favorites!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  
      console.error("Error adding product to favorites:", error);
    
    }
}

//Action to remove product from favorites
export const removeFavorite = (reg_id, product_id) => async (dispatch, getState) => {
  try {
      const { userLogin } = getState(); // Access user data if needed

      const token = localStorage.getItem("jwt"); // Get JWT token from localStorage
      if (!token) {
          throw new Error("User not authenticated");
      }

      const config = {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
          data: {
              reg_id,
              product_id,
          },
      };

      // Send request to delete the product from favorites
      await axios.delete(`${API_BASE_URL}/api/fav/removefav`, config);

      // Dispatch action to update the favorites list
      dispatch({
          type: REMOVE_FAVORITE_SUCCESS,
          payload: product_id, // Optionally send reg_id too if needed
      });

      toast.success("Item removed from favorites!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

      window.location.reload();
  } catch (error) {
      const errorMessage =
          error.response?.data?.message || error.message || "Something went wrong!";

      dispatch({
          type: REMOVE_FAVORITE_FAILURE,
          payload: errorMessage,
      });

      toast.error("Failed to remove!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

      console.error("Error removing product from favorites:", error);
  }
};


//action to fetch favorite products
export const fetchFavorites = (reg_id) => async(dispatch) =>{

  console.log("userid:",reg_id)
    dispatch({type: FETCH_FAVORITES_REQUEST})

    try{
        const { data } = await axios.get(`${API_BASE_URL}/api/fav/getfav/${reg_id}`);
        // const { data } = await axios.get(`${API_BASE_URL}/api/items/product/${product_id}`);

        dispatch ({type: FETCH_FAVORITES_SUCCESS, payload:data})

        console.log("Favorites fetched successfully", data)
    } catch(error){
        const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";

    // Dispatch failure action with error message
    dispatch({ type: FETCH_FAVORITES_FAILURE, payload: errorMessage });

    // Show error message using SweetAlert
    toast.error("Error!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    console.error("Error fetching favorites:", error);
  }
    
}