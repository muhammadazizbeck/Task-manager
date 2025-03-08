import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const getTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks/`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
  }
};
