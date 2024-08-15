import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

async function getPost() {
  try {
    const response = await axios.get(`${BASE_URL}/api/user/report`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const useFetch = () => {
  return useQuery({
    queryKey: ["report"],
    queryFn: getPost,
  });
};
