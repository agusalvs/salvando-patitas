import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  function enviarDatos(e) {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="card-body py-4 px-3 text-center">
            <div className="mb-md-4 mt-md-3 pb-2">
              <p className="mb-2 fs-2" style={{ color: "#36544F" }}>
                {" "}
                Iniciar sesión{" "}
              </p>
              <p className="mb-5 fw-light" style={{ color: "#64748B" }}>
                Ingrese sus datos para acceder a su cuenta
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
                  placeholder="Contraseña"
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
              <Link to={"/recuperar"}>
                <p
                  // type="button"
                  data-bs-dismiss="modal"
                  className="small mb-4 pb-lg-2"
                  style={{ color: "#65968D", opacity: "50%" }}
                >
                  ¿Olviaste tu contraseña?
                </p>
              </Link>

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

              {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white">
                  <i
                    className="fab fa-facebook-f fa-lg"
                    style={{ color: "#86C8BC" }}
                  ></i>
                </a>
                <a href="#!" className="text-white">
                  <i
                    className="fab fa-twitter fa-lg mx-4 px-2"
                    style={{ color: "#86C8BC" }}
                  ></i>
                </a>
                <a href="#!" className="text-white">
                  <i
                    className="fab fa-google fa-lg"
                    style={{ color: "#86C8BC" }}
                  ></i>
                </a>
              </div> */}
            </div>

            <div>
              <p className="mb-0" style={{ color: "#36544F" }}>
                ¿No tienes una cuenta?
              </p>
              <Link to={"/registro"}>
                <p
                  className="mb-0"
                  style={{ color: "#36544F" }}
                  data-bs-dismiss="modal"
                >
                  Regístrate
                </p>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
