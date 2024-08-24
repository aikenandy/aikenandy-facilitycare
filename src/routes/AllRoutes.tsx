import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  AdminPage,
  HomePage,
  ReportPage,
  SignInPage,
} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/dashboard" element={<AdminPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
