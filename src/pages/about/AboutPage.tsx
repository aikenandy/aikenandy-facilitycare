export const AboutPage = () => {
  return (
    <div className="px-3 py-6 text-lg lg:max-w-5xl lg:mx-auto">
      <div className="px-6 py-10 mx-auto mb-10 border rounded-lg shadow-lg border-primary">
        {/* Page Heading */}
        <h1 className="mb-8 text-4xl font-bold text-center">
          About Campus<span>Care</span>
        </h1>
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            Our Mission
          </h2>
          <p className="">
            The Facility Management App is designed to streamline the process of
            reporting and addressing issues within the engineering department's
            facilities. Our goal is to ensure that students have a comfortable
            and functional learning environment by making it easy to report
            problems and get them resolved quickly.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            How It Works
          </h2>
          <p className="">
            Students can report any issues they encounter with the department's
            facilities through this app. Reports can include problems like
            broken equipment, faulty air conditioning, or any other
            facility-related issue.
          </p>
          <p className="mt-4 ">
            Once a report is submitted, it will be sent to the department's
            facility management team for review. The team will assess the issue
            and take the necessary actions to resolve it. Admins can view the
            reports on a map, making it easier to identify and prioritize the
            affected facilities.
          </p>
        </section>

        {/* Who Can Use This App Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            Who Can Use This App?
          </h2>
          <p className="">
            This app is available to all students and staff members of the
            engineering department. Whether you're in the classroom, laboratory,
            or any other facility within the department, you can use this app to
            report any issues you encounter.
          </p>
        </section>
      </div>
    </div>
  );
};
