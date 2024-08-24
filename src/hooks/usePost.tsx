import { adminFormSchema, ReportFormSchema } from "@/validators/schema";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { z } from "zod";

const combinedSchema = z.union([adminFormSchema, ReportFormSchema]);

export async function addReport(
  url: string,
  data: z.infer<typeof combinedSchema>
) {
  try {
    const response = await axios.post(url, data);
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

export const usePost = (url: string) => {
  return useMutation({
    mutationFn: (field: z.infer<typeof combinedSchema>) =>
      addReport(url, field),
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error?.message);
    },
  });
};
