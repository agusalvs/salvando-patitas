import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const buttonElement = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   if (store.auth) {
  //     return <Navigate to="/" />;
  //   }
  // }, [store.auth]);

  function onSubmit() {
    buttonElement.current.setAttribute("data-bs-dismiss", "modal");
    buttonElement.current.click();
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline form-white mb-4">
                  <input
                    {...register("email", {
                      required: "Debe ingresar un correo electronico",
                    })}
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
                  {errors.email && (
                    <p role="alert" style={{ color: "#ff6b60" }}>
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="form-outline form-white mb-2">
                  <input
                    {...register("password", {
                      required: "Debe ingresar una contraseña",
                    })}
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
                  {errors.password && (
                    <p role="alert" style={{ color: "#ff6b60" }}>
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <Link to={"/recuperar"}>
                  <p
                    data-bs-dismiss="modal"
                    className="small mb-4 pb-lg-2"
                    style={{ color: "#65968D", opacity: "50%" }}
                  >
                    ¿Olviaste tu contraseña?
                  </p>
                </Link>
                <button
                  className="btn btn-lg px-5"
                  type="submit"
                  ref={buttonElement}
                  style={{
                    borderColor: "#86C8BC",
                    color: "white",
                    backgroundColor: "#86C8BC",
                  }}
                >
                  Continuar
                </button>
              </form>
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
