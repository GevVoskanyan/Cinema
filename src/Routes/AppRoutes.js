import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../features/Home/Home";
import NotFound from "../features/NotFound/NotFound";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
