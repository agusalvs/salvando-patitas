import React, { useContext }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar bg-body-tertiary" style={{ backgroundColor: "#86C8BC" }}>
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
        <div className="nav nav-pills d-flex  justify-content-between" style={{width: '40rem'}}>
          <div className="nav-item ">
            <a className="nav-link active" style={{backgroundColor: "#FFD4B2", color:"#36544F"}}  aria-current="page" href="#">
              Publicar
            </a>
          </div>
          <div className="float-right">
            {store.auth ?
            <div className="nav-item">
              <a className="nav-link active ml-25px" style={{backgroundColor: "#CEEDC7", color:"#36544F"}} aria-current="page" href="#">
                Cerrar sesion
              </a>
            </div>:
            <div className="nav-item">
              <a className="nav-link active" style={{backgroundColor: "#CEEDC7", color:"#36544F"}} aria-current="page" href="#">
                Iniciar sesion
              </a>
            </div>}
          </div>
        </div>
      </div>
    </nav>
  );
};

