import axios from 'axios';
import Swal from "sweetalert2";
import { API_BASE_URL } from '../APIConfig';

// Pay for a single product
export const payForSingleProduct = async (product_id) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/payments/pay-now`, { product_id });
      if (response.data.url) {
        window.location.href = response.data.url; // Redirect to Stripe checkout
      }
    } catch (error) {
      Swal.fire("Payment Failed", error.response?.data?.error || "An error occurred", "error");
    }
  };

// Checkout for cart
 export const checkoutCart = async (reg_id) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/payments/checkout-cart`, { reg_id });
      if (response.data.url) {
        window.location.href = response.data.url; // Redirect to Stripe checkout
      }
    } catch (error) {
      Swal.fire("Checkout Failed", error.response?.data?.error || "An error occurred", "error");
    }
  };






// /api/payments/pay-now
// /api/payments/checkout-cart