import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [direccion, setDireccion] = useState("");
  const { store, actions } = useContext(Context);
  const Swal = require("sweetalert2");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function enviarDatos() {
    if (contraseña === confirmar) {
      actions.signup(nombre, correo, celular, contraseña, direccion);
      setNombre("");
      setCorreo("");
      setCelular("");
      setContraseña("");
      setConfirmar("");
      setDireccion("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "¡Las contraseñas no coinciden!",
      });
    }
    console.log(nombre, correo, celular, contraseña, direccion);
  }

  return (
    <center>
      <div
        style={{
          width: "800px",
          backgroundColor: "#CEEDC7",
          padding: "20px",
          borderRadius: "1rem",
        }}
      >
        <p className="mb-2 fs-2" style={{ color: "#36544F" }}>
          {" "}
          Crear una cuenta{" "}
        </p>

        <p className="mb-5 fw-light" style={{ color: "#64748B" }}>
          Ingrese sus datos para registrarse
        </p>

        <form
          className="row g-3 mx-auto "
          onSubmit={handleSubmit(enviarDatos)}
          style={{ width: "700px" }}
        >
          <div className="col-md-6">
            <input
              {...register("nombre", {
                required: "Debe ingresar su nombre",
              })}
              type="text"
              className="form-control me-2"
              id="inputNombre"
              placeholder="Nombre "
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{
                width: "325px",
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
            {errors.nombre && (
              <p role="alert" style={{ color: "#ff6b60" }}>
                {errors.nombre?.message}
              </p>
            )}
          </div>
          <div className="col-md-6">
            <input
              {...register("contraseña", {
                required: "Debe ingresar una contraseña",
              })}
              type="password"
              className="form-control me-2"
              id="inputPassword4"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              style={{
                width: "325px",
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
            {errors.contraseña && (
              <p role="alert" style={{ color: "#ff6b60" }}>
                {errors.contraseña?.message}
              </p>
            )}
          </div>
          <div className="col-md-6">
            <input
              {...register("correo", {
                required: "Debe ingresar un correo electronico",
              })}
              type="email"
              className="form-control me-2"
              id="inputEmail4"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={{
                width: "325px",
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            />{" "}
            {errors.correo && (
              <p role="alert" style={{ color: "#ff6b60" }}>
                {errors.correo?.message}
              </p>
            )}
          </div>
          <div className="col-md-6">
            <input
              {...register("confirmar", {
                required: "Debe confirmar su contraseña",
              })}
              type="password"
              className="form-control me-2"
              id="inputPassword4"
              placeholder="Confirmar contraseña"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              style={{
                width: "325px",
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
            {errors.confirmar && (
              <p role="alert" style={{ color: "#ff6b60" }}>
                {errors.confirmar?.message}
              </p>
            )}
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control me-2"
              id="inputCelular"
              placeholder="Celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              style={{
                width: "325px",
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
          </div>
          <div className="col-md-6">
            <input
              {...register("direccion", {
                required: "Debe ingresar una direccion",
              })}
              type="text"
              className="form-control"
              id="inputDireccion"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              style={{
                width: "325px",
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            />
            {errors.direccion && (
              <p role="alert" style={{ color: "#ff6b60" }}>
                {errors.direccion?.message}
              </p>
            )}
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "300px",
                backgroundColor: "#86C8BC",
                color: "#FFFFFF",
                borderColor: "#86C8BC",
                borderRadius: "2rem",
              }}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </center>
  );
};

export default Registro;
