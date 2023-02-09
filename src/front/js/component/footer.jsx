import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer>
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgb(134, 200, 188)" }}
    >
      ©2023 SalvandoPatitas.com All rights reserved.
      <Link className="text-reset fw-bold" to="https://mdbootstrap.com/"></Link>
    </div>
  </footer>
);
