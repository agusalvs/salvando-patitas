import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Mapa } from "../component/mapa.jsx";

export const Publicar = () => {
  const [image, setImage] = useState("");
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

  // if (!store.auth) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(enviarDatos)} className="row g-3">
        <div className="alert alert-danger" role="alert">
          Complete los siguientes campos para realizar una nueva publicación:
        </div>{" "}
        {/* COLUMNA IZQUIERDA */}{" "}
        <div className="col-md-6">
          <label htmlFor="inputTitulo" className="form-label">
            Título
          </label>
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
          <label htmlFor="inputNombre" className="form-label">
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
          <label htmlFor="Nombre" className="form-label">
            Teléfono
          </label>
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
          <label htmlFor="inputGenero" className="form-label">
            Seleccione género:
          </label>{" "}
          <select
            id="inputGenero"
            className="form-select"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option defaultValue>Seleccione género</option>
            <option>Macho</option>
            <option>Hembra</option>
            <option>Desconocido</option>
          </select>
          <div
            className="ui segment d-flex justify-content-start align-items-center"
            style={{
              height: "150px",
            }}
          >
            <div className="field w-50">
              <label htmlFor="#elegir">
                A continuación puede subir una foto de la mascota:{" "}
              </label>{" "}
              <br />
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
                id="url"
              />
            </div>
            <div className="col-md-3 mb-3">
              <button
                type="button"
                onClick={() => actions.cloudinary(image)}
                className="btn btn-primary"
              >
                Subir foto
              </button>
            </div>{" "}
            {image && (
              <img src={image} alt="Uploaded Image" width="100" height="100" />
            )}{" "}
            <br />
          </div>{" "}
        </div>{" "}
        {/* COLUMNA DERECHA */}{" "}
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            Estado de la mascota:
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
            <option defaultValue> Seleccione estado </option>{" "}
            <option> Perdido </option> <option> Encontrado </option>{" "}
            <option> En Adopción </option>{" "}
          </select>{" "}
          {errors.inputState && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.inputState?.message}
            </p>
          )}
          <label htmlFor="inputDireccion" className="form-label">
            Dirección{" "}
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
          <label htmlFor="inputCategoria" className="form-label">
            Categoría{" "}
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputCategoria"
            placeholder="Especie/Categoria de animal (ej. gato, perro, conejo, etc)"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />{" "}
          <label htmlFor="inputEdad" className="form-label">
            Seleccione edad:
          </label>{" "}
          <select
            id="inputEdad"
            className="form-select"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          >
            <option defaultValue>Seleccione edad</option>
            <option>Cachorro (menos de 1 año)</option>
            <option>Joven (1-3 años)</option>
            <option>Adulto (3-8 años)</option>
            <option>Senior (+8 años)</option>
          </select>
          <label htmlFor="inputRaza" className="form-label">
            Raza
          </label>
          <input
            type="text"
            className="form-control"
            id="inputRaza"
            placeholder="Ingrese la raza de su mascota"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
          ></input>
          <label htmlFor="inputTamaño" className="form-label">
            Seleccione tamaño:
          </label>{" "}
          <select
            id="inputTamaño"
            className="form-select"
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
          >
            <option defaultValue>Seleccione tamaño</option>
            <option>Pequeño (0-10 kgs)</option>
            <option>Mediano (11-27 kgs)</option>
            <option>Grande (28-45 kgs)</option>
            <option>XL (+46 kgs)</option>
          </select>
          <label>Comentarios</label>
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
            Publicar{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};
