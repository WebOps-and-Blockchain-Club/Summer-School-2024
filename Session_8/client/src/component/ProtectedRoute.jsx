import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Alert from "./Alert";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar
        toggleMode={props.toggleMode}
        alert={props.alert}
        mode={props.mode}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedRoute;
