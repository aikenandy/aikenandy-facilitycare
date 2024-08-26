import { ReportFormSchema } from "@/validators/schema";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import toast from "react-hot-toast";
import { z } from "zod";

type SendContactUsMessage = z.infer<typeof ReportFormSchema>;

export const sendAdminEmailReport = async (values: SendContactUsMessage) => {
  const templateParams = {
    name: values.fullName,
    course: values.course,
    facility: values.facility,
    issue: values.message,
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID!,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
      templateParams,
      {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY!,
      }
    );
    console.log("Message successfully delivered");
    toast.success("Message delivered");
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log("EMAILJS FAILED...", err);
      toast.error(err.text);
      return;
    }
    toast.error("Failed to deliver message");
    console.log("ERROR", err);
  }
};
