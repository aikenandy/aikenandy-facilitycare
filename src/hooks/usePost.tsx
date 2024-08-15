import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function addReport() {
  try {
    const response = await axios.get(`${BASE_URL}/api/user/report`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const usePost = () => {
  return <div>usePost</div>;
};
