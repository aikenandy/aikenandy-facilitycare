import { ReportFormSchema } from "@/validators/schema";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { z } from "zod";

type ReportTye = {
  data: z.infer<typeof ReportFormSchema>[];
};

async function getPost(): Promise<ReportTye> {
  try {
    const response = await axios.get(`/api/user/report`);
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      console.error("Error posting:", error);
      throw new Error(error.response?.data.message || error.message);
    }
    throw error;
  }
}

export const useFetch = () => {
  return useQuery({
    queryKey: ["issues"],
    queryFn: getPost,
  });
};
