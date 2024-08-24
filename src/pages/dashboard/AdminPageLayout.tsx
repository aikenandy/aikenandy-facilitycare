import { LayoutDashboard } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export const AdminPageLayout = () => {
  return (
    <section>
      <header className="flex items-center gap-1 px-5 py-5 font-semibold bg-secondary">
        <LayoutDashboard />
        <h1 className="text-primary">Dashboard</h1>
      </header>
      <div className="grid grid-cols-[10rem_1fr] min-h-dvh">
        <div className="px-5 space-y-2 font-medium bg-secondary">
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
