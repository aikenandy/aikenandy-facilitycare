import { ReportFormSchema } from "@/validators/schema";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { z } from "zod";

type ReportProps = z.infer<typeof ReportFormSchema>;

export async function addReport(report: ReportProps) {
  try {
    const response = await axios.post(`/api/user/report`, report);
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

export const usePost = () => {
  return useMutation({
    mutationFn: (field: ReportProps) => addReport(field),
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error?.message);
    },
  });
};
