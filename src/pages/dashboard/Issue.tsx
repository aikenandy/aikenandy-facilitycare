import { ReportFormSchema } from "@/validators/schema";
import { z } from "zod";

type IssueProps = z.infer<typeof ReportFormSchema>;

export const Issue = ({ issue }: { issue: IssueProps }) => {
  return (
    <div className="pt-2 [&_strong]:mr-2">
      <p>
        <strong>Name:</strong>
        {issue.fullName}
      </p>
      <p>
        <strong>Course:</strong>
        {issue.course}
      </p>
      <p>
        <strong>Level:</strong>
        {issue.level}
      </p>
      <p>
        <strong>Facility:</strong>
        {issue.facility}
      </p>
      <p>
        <strong>Issue:</strong>
        {issue.message}
      </p>
    </div>
  );
};
