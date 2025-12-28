import axios from "axios";

// 🔗 Backend base URL — change if your FastAPI runs on a different port
const API_BASE_URL = "http://127.0.0.1:8000";

export const fetchData = async (vertical) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${vertical}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
