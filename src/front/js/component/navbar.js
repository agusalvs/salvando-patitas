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
          
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>
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
