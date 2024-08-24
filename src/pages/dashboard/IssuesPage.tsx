import { useFetch as useGetReport } from "@/hooks";
import { Loader } from "lucide-react";
import { Issue } from "./Issue";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const IssuesPage = () => {
  const { data: report, error, isError, isLoading } = useGetReport();
  const [search, setSearch] = useState("");

  // filter by issue
  const filteredIssue = report?.data.filter((issue) =>
    issue.facility.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );


  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <p>Fetching data</p>
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <section className="space-y-4 divide-y-2">
      <Input
        type="search"
        placeholder="Filter by facility "
        onChange={(e) => setSearch(e.target.value)}
      />

      <>
        {filteredIssue?.map((issue) => (
          <Issue key={issue.facility} issue={issue} />
        ))}
      </>
    </section>
  );
};
