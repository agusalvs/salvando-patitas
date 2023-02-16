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
      className="navbar bg-body-tertiary"
      style={{ backgroundColor: "#86C8BC" }}
    >
      <div className="container-fluid">
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
          className="nav nav-pills d-flex  justify-content-between"
          style={{ width: "40rem" }}
        >
          <div className="nav-item ">
            <a
              className="nav-link active"
              style={{ backgroundColor: "#FFD4B2", color: "#36544F" }}
              aria-current="page"
              href="#"
            >
              Publicar
            </a>
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
              <div className="nav-item">
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
          <div className="nav-item">
            <div className="dropdown">
              <a
                onClick={onChangeMenuHamburguesa}
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </a>
              <div
                className="dropdown-menu dropdown-menu-left"
                aria-labelledby="dropdownMenuButton"
                style={
                  estadoNavbar
                    ? {
                        display: "block",
                        right: "10px",
                      }
                    : {
                        display: "none",
                        right: "10px",
                      }
                }
              >
                <a className="dropdown-item" href="#perdidos">
                  Perdidos
                </a>
                <a className="dropdown-item" href="#encontrados">
                  Encontrados
                </a>
                <a className="dropdown-item" href="#adopcion">
                  En adopcion
                </a>
                {/* <a className="dropdown-item" href="#donaciones">Donaciones</a> */}{" "}
              </div>
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
