import { ReportFormSchema } from "@/validators/schema";
import { FieldError, FieldErrors, UseFormReturn } from "react-hook-form";
import { z } from "zod";

type FormFields = z.infer<typeof ReportFormSchema>;

export const isError = <T extends FormFields>(
  fieldName: string,
  errors: FieldErrors<T>,
  form: UseFormReturn<T>
) => {
  const error = errors[
    fieldName as keyof typeof form.formState.defaultValues
  ] as FieldError | undefined;
  return error?.message;
};
