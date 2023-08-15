import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../features/Home/Home";
import NotFound from "../features/NotFound/NotFound";
import SignIn from "../features/SignIn/SignIn";
import SignUp from "../features/SignUp/SignUp";
import Catalog from "../features/Catalog/Catalog";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;
