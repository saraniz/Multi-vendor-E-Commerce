import axios from "axios";
import { API_BASE_URL } from '../APIConfig';

export const fetchCategoryProducts = async (category) => {
  const response = await axios.get(`${API_BASE_URL}/api/category/${category}`);
  return response.data;
};