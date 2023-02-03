import React, { useState, useContext } from "react";
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
        <Navigate to="/home" />
      ) : (
        <>
          <form
            className="mx-auto text-align-left py-5 needs-validation"
            style={{ width: "500px" }}
            onSubmit={enviarDatos}
            novalidate
          >
            <div
              className="mb-3"
              style={{
                width: "500px",
              }}
            >
              <label
                htmlFor="validationTooltip01"
                className="form-label text-align-left text-start"
                style={{ color: "#36544F" }}
              >
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Correo electrónico"
                style={{
                  backgroundColor: "RGB(255, 246, 189)",
                  borderColor: "RGB(54, 84, 79)",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div
              className="mb-3"
              style={{
                width: "500px",
              }}
            >
              <label
                htmlFor="validationTooltip02"
                className="form-label"
                style={{ color: "#36544F" }}
              >
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Contraseña"
                style={{
                  backgroundColor: "RGB(255, 246, 189)",
                  borderColor: "RGB(54, 84, 79)",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div class="invalid-feedback">
                Por favor ingrese una contraseña correcta.{" "}
              </div>{" "}
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Recordarme
              </label>
            </div>
            <button
              type="submit"
              className="btn mt-3 px-5"
              style={{
                backgroundColor: "RGB(134, 200, 188)",
                color: "white",
                width: "400px",
              }}
            >
              Continuar
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
