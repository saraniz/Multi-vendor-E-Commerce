import axios from 'axios';
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  FETCH_CART_ITEMS,
  FETCH_CART_FAILURE,
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  SET_GUEST_CART_ITEMS,
  UPDATE_GUEST_CART_ITEM,
  CLEAR_GUEST_CART,
  FETCH_CART_REQUEST,
  CART_FLAG_TOGGLE, // ✅ Add this to your action types
} from './cartactionType';

import Swal from 'sweetalert2';
import { API_BASE_URL } from '../APIConfig';
import { toast } from 'react-toastify';

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART_REQUEST });

  const token = localStorage.getItem("jwt");

  // ✅ Guest User Flow
  if (!token) {
    let guestCart = JSON.parse(sessionStorage.getItem("guestCartItems")) || [];

    const existingIndex = guestCart.findIndex(
      (item) => item.id === product.id && item.size === product.size && item.image === (product.image || product.product_image)
    );

    if (existingIndex !== -1) {
      guestCart[existingIndex].quantity += quantity;
      // Fix: also update image if missing (for old guest cart items)
      if (!guestCart[existingIndex].image && (product.image || product.product_image)) {
        guestCart[existingIndex].image = product.image || product.product_image;
      }
    } else {
      const guestItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || product.product_image || "/placeholder.png", // only fix image logic
        description: product.description,
        size: product.size,
        quantity,
        color: product.color || "",
      };
      console.log("🧾 Guest cart item image:", product.image, product.product_image);
      console.log("🧾 Adding new guest cart item:", guestItem);
      guestCart.push(guestItem);
    }

    sessionStorage.setItem("guestCartItems", JSON.stringify(guestCart));
    dispatch({ type: SET_GUEST_CART_ITEMS, payload: guestCart });

    console.log("🛍️ Guest cart saved (final):", guestCart);

    toast.success("Item added to guest cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });


    return;
  }

  // ✅ Logged-in User Flow
  try {
    const productIdInt = parseInt(product.id || product.productId, 10);
    if (isNaN(productIdInt)) throw new Error("Invalid productId.");

    const response = await axios.post(
      `${API_BASE_URL}/api/cart/add`,
      {
        productId: productIdInt,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Success!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Item added to cart successfully",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });

    dispatch({ type: ADD_TO_CART_SUCCESS, payload: response.data.cartItem });
    dispatch({ type: CART_FLAG_TOGGLE });
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = "/LoginPage";
    }

    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: error.response?.data?.error || error.message,
    });
  }
};


export const fetchCartItems = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CART_REQUEST });
    const token = localStorage.getItem("jwt");
    if (!token) throw new Error("User not authenticated");

    const { data } = await axios.get(`${API_BASE_URL}/api/cart/viewCart`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: FETCH_CART_SUCCESS, payload: data.cartItems });

  } catch (error) {
    dispatch({
      type: FETCH_CART_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const fetchGuestCartItems = () => (dispatch) => {
  const guestCartItems = JSON.parse(sessionStorage.getItem('guestCartItems')) || [];
  dispatch({
    type: SET_GUEST_CART_ITEMS,
    payload: guestCartItems,
  });
};

// export const updateCartItem = (cart_id, quantity) => async (dispatch, getState) => {
//   const { user, cart } = getState();

//   // Guest cart
//   if (!user || !user.token) {
//     let newCartItems = cart.cartItems.map(item =>
//       item.id === cart_id ? { ...item, quantity } : item
//     );
//     newCartItems = newCartItems.filter(item => item.quantity > 0);
//     sessionStorage.setItem("guestCartItems", JSON.stringify(newCartItems));

//     dispatch({
//       type: UPDATE_GUEST_CART_ITEM,
//       payload: newCartItems,
//     });

//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Cart updated",
//       showConfirmButton: false,
//       timer: 1200,
//     });
//   } 
//   // Logged-in user → backend
//   else {
//     try {
//       const token = localStorage.getItem("jwt");
//       if (!token) throw new Error("User not authenticated");

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       await axios.put(
//         `${API_BASE_URL}/api/cart/update/${cart_id}`,
//         { quantity },
//         config
//       );

//       dispatch({ type: CART_FLAG_TOGGLE }); // trigger cart refetch

//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Cart updated",
//         showConfirmButton: false,
//         timer: 1200,
//       });
//     } catch (error) {
//       console.error("Error updating cart item:", error);
//       Swal.fire({
//         position: "top-end",
//         icon: "error",
//         title: "Failed to update cart",
//         text: error.message,
//       });
//     }
//   }
// };

export const deleteFromCart = (cart_id, product_id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) throw new Error("User not authenticated");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { cart_id, product_id },
    };

    await axios.delete(`${API_BASE_URL}/api/cart/delete`, config);

    dispatch({
      type: REMOVE_FROM_CART_SUCCESS,
      payload: product_id,
    });

    dispatch({ type: CART_FLAG_TOGGLE }); // ✅ trigger re-fetch

    toast.success("Item removed from cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

   
  } catch (error) {
    console.error("Error removing product from cart:", error);

   toast.error("Error! Cannot Remove Item", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});

    
  }
};

export const clearGuestCart = () => (dispatch) => {
  sessionStorage.removeItem('guestCartItems');
  dispatch({ type: CLEAR_GUEST_CART });
};

export const updateCartItem = (cart_id, quantity) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) throw new Error("User not authenticated");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = { quantity };

    await axios.put(`${API_BASE_URL}/api/cart/update/${cart_id}`, body, config);

    dispatch({ type: "CART_FLAG_TOGGLE" }); // trigger re-fetch

    toast.success("Cart Updated Successfully", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});


  

  } catch (error) {
    console.error("Error updating cart item:", error);
    toast.error("Error updating cart item", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});

  }
};
