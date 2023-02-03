import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: "RGB(134, 200, 188)" }}
    >
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://o.remove.bg/downloads/f521f910-bf40-41e9-aa7c-a516d5f45618/9479452d783b1ae2605a4547577e1313-removebg-preview.png"
              style={{ width: "50px", height: "50px" }}
            />
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button
              className="btn"
              style={{
                backgroundColor: "RGB(206, 238, 200)",
                color: "RGB(55, 56, 103)",
              }}
            >
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

// https://o.remove.bg/downloads/f521f910-bf40-41e9-aa7c-a516d5f45618/9479452d783b1ae2605a4547577e1313-removebg-preview.png
