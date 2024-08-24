import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  AdminPageLayout,
  FacilitiesPage,
  HomePage,
  IssuesPage,
  ReportPage,
  SignInPage,
} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/dashboard" element={<AdminPageLayout />}>
        <Route index element={<FacilitiesPage />} />
        <Route path="facilities" index element={<FacilitiesPage />} />
        <Route path="issues" element={<IssuesPage />} />
      </Route>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
