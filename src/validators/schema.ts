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


export const adminFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters ",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email address format",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password cannot exceed 32 characters" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});
