import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./../../Routes/AppRoutes";

function App(props) {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
