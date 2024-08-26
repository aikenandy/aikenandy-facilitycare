import { LayoutDashboard } from "lucide-react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const AdminPageLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authenticated");
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated === null || !isAuthenticated) navigate("/sign-in");
  });

  return (
    <section>
      <header className="flex items-center gap-1 px-5 py-5 font-semibold bg-secondary">
        <LayoutDashboard />
        <h1 className="text-primary">Dashboard</h1>
      </header>
      <div className="grid sm:grid-cols-[10rem_1fr] min-h-dvh">
        <div className="flex gap-3 px-5 pb-4 font-medium sm:pb-0 sm:items-center sm:block sm:space-y-2 bg-secondary">
          <li className="list-none hover:text-primary">
            <Link to="facilities">Facilities</Link>
          </li>
          <li className="list-none hover:text-primary">
            <Link to="issues">Issues</Link>
          </li>
        </div>
        <div className="px-5 py-3 border-l border-gray-300">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
