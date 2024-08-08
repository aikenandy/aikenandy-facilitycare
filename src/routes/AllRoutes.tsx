import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, ReportPage } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};
