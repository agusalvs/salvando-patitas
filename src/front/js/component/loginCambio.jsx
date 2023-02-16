import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const LoginCambio = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  function enviarDatos(e) {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
    navigate("/cambiar-contrasena");
  }

  return (
    <>
      <div className="card-body py-4 px-3 text-center">
        <div className="mb-md-4 mt-md-3 pb-2">
          <p className="mb-2 fs-2" style={{ color: "#36544F" }}>
            {" "}
            Iniciar sesión{" "}
          </p>
          <p className="mb-5 fw-light" style={{ color: "#64748B" }}>
            Para poder cambiar su contraseña
          </p>

          <div className="form-outline form-white mb-4">
            <input
              type="email"
              id="loginEmail"
              className="form-control form-control-lg mb-2"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFD4B2",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
          </div>

          <div className="form-outline form-white mb-2">
            <input
              type="password"
              id="loginPassword"
              className="form-control form-control-lg mb-2"
              placeholder="Contraseña enviada al correo.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFD4B2",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
          </div>
          <p
            // type="button"
            data-bs-dismiss="modal"
            className="small mb-4 pb-lg-2"
            style={{ color: "#65968D", opacity: "50%" }}
          >
            Enviar contraseña al correo nuevamente.
          </p>
          <Link to={"/cambiar-contrasena"}>
            <button
              className="btn btn-lg px-5 "
              data-bs-dismiss="modal"
              type="button"
              onClick={enviarDatos}
              style={{
                borderColor: "#86C8BC",
                color: "white",
                backgroundColor: "#86C8BC",
              }}
            >
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginCambio;
