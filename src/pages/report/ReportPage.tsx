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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Asterisk, Loader, SendHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import { ButtonLink } from "@/components/button";
import { ReportFormSchema } from "@/validators/schema";
import { Textarea } from "@/components/ui/textarea";
import { usePost as usePostReport } from "@/hooks";
import { useEffect } from "react";

export const ReportPage = () => {
  const form = useForm<z.infer<typeof ReportFormSchema>>({
    resolver: zodResolver(ReportFormSchema),
    defaultValues: {
      fullName: "",
      course: "",
      level: undefined,
      facility: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, errors },
  } = form;

  const {
    mutate: postReport,
    isPending: isExecuting,
    isSuccess: isPostSuccessful,
  } = usePostReport();

  useEffect(() => {
    if (isPostSuccessful) reset();
  }, [isPostSuccessful, reset]);

  async function onSubmit(data: z.infer<typeof ReportFormSchema>) {
    console.log(data);
    if (isExecuting) {
      toast.custom("Sending report");
    }
    postReport(data);
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
                      disabled={isExecuting}
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
                      disabled={isExecuting}
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
                      disabled={isExecuting}
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
              name="facility"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>
                    Facility Block
                    <Asterisk className="mb-[3px] inline-flex h-4 w-4 text-destructive" />
                  </FormLabel>

                  <Select
                    {...field}
                    disabled={isExecuting}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={`${
                          errors.facility
                            ? "border-destructive focus-visible:ring-destructive"
                            : "border-primary"
                        }`}
                      >
                        <SelectValue placeholder="Select facility with issue" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Engineering Workshop and Laboratory">
                        Engineering Workshop and Laboratory
                      </SelectItem>
                      <SelectItem value="Engineering Laboratory">
                        Engineering Laboratory
                      </SelectItem>
                      <SelectItem value="Energy Annex">Energy Annex</SelectItem>
                      <SelectItem value="Caesar Building">
                        Caesar Building
                      </SelectItem>
                      <SelectItem value="Kumapley Building">
                        Kumapley Building
                      </SelectItem>
                      <SelectItem value="Wascal Building">
                        Wascal Building
                      </SelectItem>
                      <SelectItem value="Treck Building">
                        Treck Building
                      </SelectItem>
                      <SelectItem value="Petroleum Building">
                        Petroleum Building
                      </SelectItem>
                      <SelectItem value="New Engineering Building">
                        New Engineering Building
                      </SelectItem>
                      <SelectItem value="Bamfo Kwakye Building">
                        Bamfo Kwakye Building
                      </SelectItem>
                      <SelectItem value="Levine Building">
                        Levine Building
                      </SelectItem>
                      <SelectItem value="Kwami Building">
                        Kwami Building
                      </SelectItem>
                      <SelectItem value="IBRES Building">
                        IBRES Building
                      </SelectItem>
                      <SelectItem value="Engineering Security">
                        Engineering Security
                      </SelectItem>
                      <SelectItem value="Engineering Study Tent">
                        Engineering Study Tent
                      </SelectItem>
                      <SelectItem value="Study Tent">Study Tent</SelectItem>
                    </SelectContent>
                  </Select>
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
                      disabled={isExecuting}
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
              disabled={isExecuting}
              className="w-full mt-4"
              type="submit"
              onClick={() => {
                if (!isValid) {
                  toast.error("Please fill required fields");
                }
              }}
            >
              {isExecuting ? (
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
