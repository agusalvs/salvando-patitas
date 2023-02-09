import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Footer } from "./footer.jsx";
import { Footerhome } from "./footerhome.jsx";
export const FooterVariable = () => {
  const location = useLocation();
  return <div>{location.pathname === "/" ? <Footerhome /> : <Footer />}</div>;
};
