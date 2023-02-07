import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Login from "../component/login.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

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
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ backgroundColor: "#CEEDC7" }}
        >
          Iniciar sesión
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{
                borderRadius: "2rem",
                borderColor: "#36544F",
                borderWidth: "3px",
                backgroundColor: "#FFF6BD",
              }}
            >
              <Login />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
