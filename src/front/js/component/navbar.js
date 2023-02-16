import React, { useContext, useState } from "react";
// import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Login from "../component/login.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [estadoNavbar, setEstadoNavbar] = useState(false);
  const Swal = require("sweetalert2");
  const navigate = useNavigate(); //activamos useNavigate
  const onChangeMenuHamburguesa = () => {
    setEstadoNavbar(!estadoNavbar);
  };

  function handleLogout() {
    Swal.fire({
      title: "¿Deseas cerrar sesión?",
      text: "No podrás revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "¡Sí, cerrar sesión!",
    }).then((result) => {
      if (result.isConfirmed) {
        actions.logout(); //cerrar la sesion
        Swal.fire("¡Sesión cerrada!", "Has cerrado sesión.", "success");
        navigate("/"); //usamos navigate para redireccionar
      }
    });
  }

  return (
    <nav
      className="navbar bg-body-tertiary "
      style={{ backgroundColor: "#86C8BC" }}
    >
      <div className="container-fluid ps-4">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#36544F"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
        </Link>
        <div
          className="nav nav-pills d-flex  justify-content-end "
          style={{ width: "40rem" }}
        >
          <div className="nav-item mx-2 px-2 ">
            <Link to="/publicar">
              <button
                className="btn"
                style={{ backgroundColor: "#FFD4B2", color: "#36544F" }}
              >
                Publicar
              </button>
            </Link>
          </div>
          <div className="nav-item float-right">
            {store.auth === true ? (
              <div className="nav-item">
                <a
                  onClick={handleLogout}
                  className="nav-link active ml-25px"
                  style={{ backgroundColor: "#CEEDC7", color: "#36544F" }}
                  aria-current="page"
                  href="#"
                >
                  Cerrar sesion
                </a>
              </div>
            ) : (
              <div className="nav-item ms-2 ps-2">
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
            )}{" "}
          </div>
          <div className="nav-item mx-2 px-2">
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <i
                  className="fa fa-bars"
                  style={{ fontSize: "25px", color: "#36544F" }}
                ></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                style={{ backgroundColor: "#86C8BC" }}
              >
                <li>
                  <a href="/perdidos" className="dropdown-item">
                    Perdidos
                  </a>
                </li>
                <li>
                  <a href="/encontrados" className="dropdown-item">
                    Encontrados
                  </a>
                </li>
                <li>
                  <a href="/en-adopcion" className="dropdown-item">
                    En adopción
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Modal -->
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
        </div> */}
      </div>
    </nav>
  );
};
