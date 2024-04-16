import API from "./axios";

export const getCategoryList = async () => {
  try {
    const url = "/image/category"
    const response = await API.get(url);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
