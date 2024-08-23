import { z } from "zod";

export const ReportFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters ",
    }),
  course: z
    .string()
    .min(3, { message: "Course must be at least 3 characters long" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Course can only contain letters ",
    }),
  level: z.enum(["100", "200", "300", "400", "500", "600", "700"], {
    errorMap: () => ({
      message: "Level must be one of 100, 200, 300, 400, 500, 600, or 700",
    }),
  }),
  facility: z.string().min(3, { message: "Please select a facility" }),

  message: z
    .string()
    .min(5, { message: "Your message must be at least 5 characters long" })
    .max(600, { message: "Message cannot exceed 600 characters" }),
});
