import React, { useContext, useState } from "react";
// import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Login from "./login.jsx";

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
          <img
            src="https://res.cloudinary.com/de1k9ojw2/image/upload/v1676912187/Salvando%20Patitas/9479452d783b1ae2605a4547577e1313-removebg-preview_kvao0t.png"
            style={{ width: "60px", height: "60px" }}
          />
        </Link>
        <div
          className="nav nav-pills d-flex  justify-content-end "
          style={{
            width: "40rem",
          }}
        >
          {store.auth === true ? (
            <div className="nav-item mx-2 px-2 ">
              <Link to="/publicar">
                <button
                  className="btn ml-25px"
                  style={{
                    backgroundColor: "#FFD4B2",
                    color: "#36544F",
                    height: "40px",
                  }}
                >
                  Publicar
                </button>
              </Link>
            </div>
          ) : null}
          <div className="nav-item float-right">
            {" "}
            {store.auth === true ? (
              <div className="nav-item">
                <a
                  onClick={handleLogout}
                  className="nav-link active ml-25px"
                  style={{
                    backgroundColor: "#CEEDC7",
                    color: "#36544F",
                  }}
                  aria-current="page"
                  href="/"
                >
                  Cerrar sesion{" "}
                </a>{" "}
              </div>
            ) : (
              <div className="nav-item ms-2 ps-2">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{
                    backgroundColor: "#CEEDC7",
                    color: "#36544F",
                  }}
                >
                  Iniciar sesión{" "}
                </button>
                {/* <!-- Modal --> */}{" "}
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
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )}{" "}
          </div>{" "}
          <div className="nav-item mx-2 px-2">
            <div className="dropdown">
              <button
                type="button"
                className="btn "
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <i
                  className="fa fa-bars"
                  style={{
                    fontSize: "25px",
                    color: "#36544F",
                  }}
                ></i>{" "}
              </button>{" "}
              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                style={{
                  backgroundColor: "#86C8BC",
                }}
              >
                <li>
                  <a
                    href="/perdidos"
                    className="dropdown-item"
                    style={{ color: "#36544F" }}
                  >
                    Perdidos{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a
                    href="/encontrados"
                    className="dropdown-item"
                    style={{ color: "#36544F" }}
                  >
                    Encontrados{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a
                    href="/en-adopcion"
                    className="dropdown-item"
                    style={{ color: "#36544F" }}
                  >
                    En adopción{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
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
                    </div> */}{" "}
      </div>{" "}
    </nav>
  );
};
