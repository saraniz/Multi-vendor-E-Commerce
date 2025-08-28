// 📁 storage/adminAxios.js
import axios from "axios";
import { API_BASE_URL } from '../APIConfig';


// Send warning to seller
export const sendWarning = async (seller_id, level) => {
  const urlMap = {
    1: `${API_BASE_URL}/api/admin/send-warning-1`,
    2: `${API_BASE_URL}/api/admin/send-warning-2`,
    3: `${API_BASE_URL}/api/admin/send-warning-3`,
  };

  return axios.put(urlMap[level], { seller_id });
};

// Block seller
export const blockSeller = async (seller_id) => {
  return axios.put(`${API_BASE_URL}/api/admin/block/${seller_id}`);
};

// Unblock Seller
export const unblockSeller = async (seller_id) => {
  return axios.put(`${API_BASE_URL}/api/admin/unblock/${seller_id}`);
};

const adminAxios = axios.create({
  baseURL: 'http://localhost:2000/api/admin', 
});

export const getAllCustomers = async () => {
  try {
    const res = await adminAxios.get('/all');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchShopList = async () => {
  try {
    const response = await axios.get("http://localhost:2000/api/admin/status"); // 🔗 Replace with your actual backend route
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching shop list:", error);
    return [];
  }
};


// for admindashboard 👇👇👇

// Get total shops
// export const fetchTotalShops = async () => {
//   const res = await axios.get("http://localhost:2000/api/admin/shop-count");
//   console.log("Store count response:", res.data);
//   return res.data.count;
// };

// Get blocked shops
// export const fetchBlockedShops = async () => {
//   const res = await axios.get("http://localhost:2000/api/admin/blocked-count");
//   return res.data.count;
// };

// Get warning counts   1  , 2 , 3
// export const fetchWarning1 = async () => {
//   const res = await axios.get("http://localhost:2000/api/admin/warning1-count");
//   return res.data.count;
// };

// export const fetchWarning2 = async () => {
//   const res = await axios.get("http://localhost:2000/api/admin/warning2-count");
//   return res.data.count;
// };

// export const fetchWarning3 = async () => {
//   const res = await axios.get("http://localhost:2000/api/admin/warning3-count");
//   return res.data.count;
// };


// fust for now 

const API = axios.create({
  baseURL: 'http://localhost:2000/api/admin', // Adjust backend URL if needed
});

// ✅ Get total shop/store count
export const getStoreCount = async () => {
  const response = await API.get('/shop-count');
  return response.data.count;
};

export const getBlockedShopCount = async () => {
  const response = await API.get('/blocked-count');
  return response.data.count;
};

export const getWarning1Count = async () => {
  const response = await API.get('/warning1-count');
  return response.data.count;
};

export const getWarning2Count = async () => {
  const response = await API.get('/warning2-count');
  return response.data.count;
};

export const getWarning3Count = async () => {
  const response = await API.get('/warning3-count');
  return response.data.count;
};


export const uploadAdvertisementImage = async (imageFile) => {
  const formData = new FormData(); // ✨ Create form data
  formData.append("image", imageFile); // ✨ Match backend field name

  try {
    const res = await axios.post(`http://localhost:2000/api/advertisements/ad`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });
    return res.data; 
  } catch (error) {
    console.error("❌ Failed to upload advertisement:", error);
    throw error;
  }
};

export const fetchAdvertisements = async () => {
  try {
    const res = await axios.get('http://localhost:2000/api/advertisements/ad'); 
    return res.data.ads;
  } catch (error) {
    console.error("❌ Failed to fetch advertisements:", error);
    return [];
  }
};

export const fetchSellersForActions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/admin/basic`);
    return response.data;
  } catch (error) {
    console.error("❌ Failed to fetch sellers for actions:", error);
    return [];
  }
};

export const getAllShops = async () => {
  try {
    const res = await axios.get("http://localhost:2000/api/admin/shops"); // backend route
    return res.data; // [{store_id, store_name, store_image}]
  } catch (error) {
    console.error("❌ Failed to fetch shops:", error);
    return [];
  }
};

//  Fetch sellers with Level 1 warning
export const fetchWarning1Sellers = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/admin/warning1`);
    return res.data; // Array of sellers
  } catch (error) {
    console.error("❌ Failed to fetch Level 1 warning sellers:", error);
    return [];
  }
};

export const fetchWarning2Sellers = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/admin/warning2`);
    return res.data; // Array of sellers
  } catch (error) {
    console.error("❌ Failed to fetch Level 2 warning sellers:", error);
    return [];
  }
};

export const fetchWarning3Sellers = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/admin/warning3`);
    return res.data; // Array of sellers
  } catch (error) {
    console.error("❌ Failed to fetch Level 3 warning sellers:", error);
    return [];
  }
};

export const getCustomerPayments = async () => {
  try {
    const res = await adminAxios.get("/totals"); 
    return res.data;
  } catch (error) {
    throw error;
  }
};