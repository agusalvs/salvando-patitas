import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Mapa } from "../component/mapa.jsx";
export const Publicar = () => {
  const [image, setImage] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDomicilio] = useState("");
  const [raza, setRaza] = useState("");
  const [inputState, setinputState] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nombre, setNombre] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [localizacion, setLocalizacion] = useState("");
  const { store, actions } = useContext(Context);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
    // setImage(URL.createObjectURL(event.target.files[0]));
  };

  function enviarDatos() {
    setLocalizacion(store.localizacion);
    if (store.auth) {
      actions.publicar(
        titulo,
        nombre,
        telefono,
        genero,
        direccion,
        raza,
        inputState,
        comentarios,
        edad,
        categoria,
        tamaño,
        image,
        image,
        image,
        localizacion
      );
      setTitulo("");
      setEdad("");
      setGenero("");
      setTelefono("");
      setDomicilio("");
      setRaza("");
      setinputState("");
      setImage("");
      setCategoria("");
      setTamaño("");
      setNombre("");
      setComentarios("");
      setLocalizacion("");
    }
  }

  if (!store.auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(enviarDatos)} className="row g-3">
        <div className="alert alert-danger" role="alert">
          Complete los siguientes campos para realizar una nueva publicacion:
        </div>{" "}
        {/* COLUMNA IZQUIERDA */}{" "}
        <div className="col-md-6">
          <label for="inputTitulo" className="form-label">
            Titulo{" "}
          </label>{" "}
          <input
            {...register("titulo", {
              required: "Debe ingresar un titulo",
            })}
            type="text"
            className="form-control"
            id="inputTitulo"
            placeholder="Escriba aqui el titulo de su publicacion"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />{" "}
          {errors.titulo && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.titulo?.message}
            </p>
          )}
          <label for="inputNombre" className="form-label">
            Nombre{" "}
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escriba aqui el nombre de su mascota"
          />
          <label for="Nombre" className="form-label">
            Telefono{" "}
          </label>{" "}
          <input
            {...register("telefono", {
              required: "Debe ingresar un telefono de contacto",
            })}
            type="number"
            className="form-control"
            id="inputTelefono"
            placeholder="Ingrese su telefono de contacto"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />{" "}
          {errors.telefono && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.telefono?.message}
            </p>
          )}
          <label for="inputGenero" className="form-label">
            Seccione genero:
          </label>{" "}
          <select
            id="inputGenero"
            className="form-select"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option selected> Seleccione genero </option>{" "}
            <option> Macho </option> <option> Hembra </option>{" "}
            <option> Desconocido </option>{" "}
          </select>{" "}
          <div
            class="ui segment d-flex justify-content-start align-items-center"
            style={{
              height: "150px",
            }}
          >
            <div className="field w-50">
              <label for="#elegir">
                A continuacion puede subir una foto de la mascota:{" "}
              </label>{" "}
              <br />
              <input
                {...register("image", {
                  required: "Debe ingresar una imagen del animal",
                })}
                id="elegir"
                name="uploadedfile"
                type="file"
                onChange={handleFileChange}
              />{" "}
              {errors.image && (
                <p role="alert" style={{ color: "#ff6b60" }}>
                  {errors.image?.message}
                </p>
              )}
            </div>{" "}
            {image && (
              <img src={image} alt="Uploaded Image" width="100" height="100" />
            )}{" "}
            <br />
          </div>{" "}
        </div>{" "}
        {/* COLUMNA DERECHA */}{" "}
        <div className="col-md-6">
          <label for="inputState" className="form-label">
            Seccion en la que publica:
          </label>{" "}
          <select
            {...register("inputState", {
              required: "Seleccione una de las secciones",
            })}
            id="inputState"
            className="form-select"
            value={inputState}
            onChange={(e) => setinputState(e.target.value)}
          >
            <option selected> Seleccione estado </option>{" "}
            <option> Perdido </option> <option> Encontrado </option>{" "}
            <option> En Adopcion </option>{" "}
          </select>{" "}
          {errors.inputState && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.inputState?.message}
            </p>
          )}
          <label for="inputDireccion" className="form-label">
            Direccion{" "}
          </label>{" "}
          <input
            {...register("direccion", {
              required: "Ingrese una direccion",
            })}
            type="text"
            className="form-control"
            id="inputDireccion"
            placeholder="Direccion"
            value={direccion}
            onChange={(e) => setDomicilio(e.target.value)}
          />{" "}
          {errors.direccion && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.direccion?.message}
            </p>
          )}
          <label for="inputCategoria" className="form-label">
            Categoria{" "}
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputCategoria"
            placeholder="Especie/Categoria de animal (ej. gato, perro, conejo, etc)"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />{" "}
          <label for="inputEdad" className="form-label">
            Seccione edad:
          </label>{" "}
          <select
            id="inputEdad"
            className="form-select"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          >
            <option selected> Seleccione edad </option>{" "}
            <option> Cachorro </option> <option> Joven </option>{" "}
            <option> Adulto </option>{" "}
          </select>{" "}
          <label for="inputRaza" className="form-label">
            Raza{" "}
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputRaza"
            placeholder="Ingrese la raza de su mascota"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
          ></input>{" "}
          <label for="inputEdad" className="form-label">
            Seccione Tamaño:
          </label>{" "}
          <select
            id="inputEdad"
            className="form-select"
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
          >
            <option selected> Seleccione tamaño </option>{" "}
            <option> Chico </option> <option> Mediano </option>{" "}
            <option> Grande </option>{" "}
          </select>{" "}
          <label> Comentarios </label>{" "}
          <div className="input-group" placeholder="Ingrese comentarios">
            <textarea
              className="form-control"
              rows="2"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="nav-item ms-2 ps-2">
          <Mapa />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-secondary w-25"
            style={{ color: "black", backgroundColor: "RGB(134, 200, 188)" }}
          >
            Publicar Anuncio{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};
