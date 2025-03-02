import { FAVORITES_LOADING,ADD_FAVORITE_SUCCESS,ADD_FAVORITE_FAILURE,ADD_FAVORITE_REQUEST, REMOVE_FAVORITE_REQUEST, REMOVE_FAVORITE_SUCCESS, FETCH_FAVORITES_REQUEST, FETCH_FAVORITES_SUCCESS, REMOVE_FAVORITE_FAILURE, FETCH_FAVORITES_FAILURE } from "./favActionType";
import { api,API_BASE_URL } from "../APIConfig";
import axios from "axios";
import Swal from "sweetalert2";


//action for add a favorite product
export const addFavorite = (reg_id,product_id) => async (dispatch) =>{
    dispatch({type: FAVORITES_LOADING})

    try{
        const { data } = await axios.post(`${API_BASE_URL}/api/fav/addfav`,{
            reg_id,
            product_id
        })

        dispatch({type:ADD_FAVORITE_SUCCESS,payload:data})

        Swal.fire({
            icon:"success",
            title:"Added to Favorites!",
            text:"The product has been added to your favorites",
        })
        console.log("Product added to favorites successfully:", data)
    } catch(error){
        const errorMessage =
        error.response?.data?.message || error.message || "Something went wrong!";
  
      // Dispatch failure action with error message
      dispatch({ type: ADD_FAVORITE_FAILURE, payload: errorMessage });
  
      // Show error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Failed to Add Favorite",
        text: errorMessage,
      });
  
      console.error("Error adding product to favorites:", error);
    
    }
}

//Action to remove product from favorites
export const removeFavorite = (reg_id,product_id) => async (dispatch) =>{
    dispatch({type: REMOVE_FAVORITE_REQUEST})

    try{
        await axios.delete(`${API_BASE_URL}/api/fav/removefav`,{
            data: {reg_id,product_id},
        })

        dispatch({type:REMOVE_FAVORITE_SUCCESS, payload:{reg_id,product_id}})

        Swal.fire({
            icon: "success",
            title: "Removed from Favorites!",
            text: "The product has been removed from your favorites.",
          });
      
          console.log("Product removed from favorites successfully");
    } catch(error){
            // Improved error handling
            const errorMessage =
              error.response?.data?.message || error.message || "Something went wrong!";
        
            // Dispatch failure action with error message
            dispatch({ type: REMOVE_FAVORITE_FAILURE, payload: errorMessage });
        
            // Show error message using SweetAlert
            Swal.fire({
              icon: "error",
              title: "Failed to Remove Favorite",
              text: errorMessage,
            });
        
            console.error("Error removing product from favorites:", error);
          }
    
}

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
    Swal.fire({
      icon: "error",
      title: "Failed to Fetch Favorites",
      text: errorMessage,
    });

    console.error("Error fetching favorites:", error);
  }
    
}