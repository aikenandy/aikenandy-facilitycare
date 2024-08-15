"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Asterisk, Loader, SendHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import { ButtonLink } from "@/components/button";
import { ReportFormSchema } from "@/validators/schema";
import { Textarea } from "@/components/ui/textarea";

export const ReportPage = () => {
  const form = useForm<z.infer<typeof ReportFormSchema>>({
    resolver: zodResolver(ReportFormSchema),
    defaultValues: {
      fullName: "",
      course: "",
      level: undefined,
      message: "",
    },
  });

  const {
    handleSubmit,
    control,

    formState: { isValid, errors, isSubmitting },
  } = form;

  async function onSubmit(data: z.infer<typeof ReportFormSchema>) {
    console.log(data);
  }

  return (
    <div className="px-4 py-6 text-lg lg:max-w-5xl lg:mx-auto">
      {/* Page Heading */}
      <h1 className="mb-4 text-3xl font-bold text-center text-primary">
        Report a Facility Issue
      </h1>

      {/* Introduction Text */}
      <p className="mb-8 text-center text-gray-700">
        Please use the form below to report the issue <br />
      </p>
      
      <div className="px-3 pb-10 mx-auto mb-10 border rounded-lg shadow-2xl border-primary">
        <Form {...form}>
          <form
            autoComplete="off"
            className="mt-4 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      // disabled={isExecuting}
                      placeholder="Enter your full name"
                      type="text"
                      className={`${
                        errors.fullName
                          ? "border-destructive focus-visible:ring-destructive"
                          : "border-primary"
                      }`}
                    />
                  </FormControl>
                  <FormMessage>{errors.fullName?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="course"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Course</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      // disabled={isExecuting}
                      placeholder="Enter your course"
                      type="text"
                      className={`${
                        errors.course
                          ? "border-destructive focus-visible:ring-destructive"
                          : "border-primary"
                      }`}
                    />
                  </FormControl>
                  <FormMessage>{errors.course?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="level"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>
                    Level
                    <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      // disabled={isExecuting}
                      placeholder="Enter your level"
                      type="text"
                      className={`${
                        errors.level
                          ? "border-destructive focus-visible:ring-destructive"
                          : "border-primary"
                      }`}
                    />
                  </FormControl>
                  <FormMessage>{errors.level?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Message
                    <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isSubmitting}
                      placeholder="Write your message..."
                      rows={5}
                      maxLength={200}
                      className={`w-full resize-none ${
                        errors.message
                          ? "border-destructive focus-visible:ring-destructive"
                          : "border-primary"
                      }`}
                    />
                  </FormControl>
                  {field.value?.length > 0 && (
                    <small
                      className={`${
                        field.value.length === 200
                          ? "text-destructive dark:text-destructive"
                          : ""
                      }`}
                    >
                      {field.value.length === 200
                        ? "Maximum characters exceeded"
                        : `${Math.round(
                            (field.value.length / 200) * 100
                          )}% of maximum length (${field.value.length}/${200})`}
                    </small>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <ButtonLink
              // disabled={isExecuting}
              className="w-full mt-4"
              type="submit"
              onClick={() => {
                if (!isValid) {
                  toast.error("Please fill required fields");
                }
              }}
            >
              {isSubmitting ? (
                <>
                  Sending Report
                  <Loader className="w-5 h-5 ml-1 animate-spin" />
                </>
              ) : (
                <>
                  Send Report <SendHorizontal className="ml-2" />
                </>
              )}
            </ButtonLink>
          </form>
        </Form>
      </div>
    </div>
  );
};
