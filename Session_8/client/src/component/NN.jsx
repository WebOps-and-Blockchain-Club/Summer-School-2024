import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Alert from "./Alert";


const NN = (props) => {
  const location = useLocation();


  return (
    <>
  <Alert alert={props.alert}/>      
  <Outlet />
  </>
);
};

export default NN;
