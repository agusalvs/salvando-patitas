import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
    // setImage(URL.createObjectURL(event.target.files[0]));
  };

  function enviarDatos(e) {
    setLocalizacion(store.localizacion);
    e.preventDefault();
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

  return (
    <div className="card-body">
      <form onSubmit={enviarDatos} className="row g-3">
        <div className="alert alert-danger" role="alert">
          Complete los siguientes campos para realizar una nueva publicacion:
        </div>

        {/* COLUMNA IZQUIERDA */}
        <div className="col-md-6">
          <label for="inputTitulo" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitulo"
            placeholder="Escriba aqui el titulo de su publicacion"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <label for="inputNombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escriba aqui el nombre de su mascota"
          />

          <label for="Nombre" className="form-label">
            Telefono
          </label>
          <input
            type="number"
            className="form-control"
            id="inputTelefono"
            placeholder="Ingrese su telefono de contacto"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <label for="inputGenero" className="form-label">
            Seccione genero:
          </label>
          <select
            id="inputGenero"
            className="form-select"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option selected>Seleccione genero</option>
            <option>Macho</option>
            <option>Hembra</option>
            <option>Desconocido</option>
          </select>

          <div
            className="ui segment d-flex justify-content-start align-items-center"
            style={{ height: "150px" }}
          >
            <div className="field w-50">
              <label for="#elegir">
                A continuacion puede subir una foto de la mascota:{" "}
              </label>
              <br />
              <input
                id="elegir"
                name="uploadedfile"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            {image && (
              <img src={image} alt="Uploaded Image" width="100" height="100" />
            )}
            <br />
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="col-md-6">
          <label for="inputState" className="form-label">
            Seccion en la que publica:
          </label>
          <select
            id="inputState"
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option selected>Seleccione estado</option>
            <option>Perdido</option>
            <option>Encontrado</option>
            <option>En Adopcion</option>
          </select>
          <label for="inputDireccion" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDireccion"
            placeholder="Direccion"
            value={direccion}
            onChange={(e) => setDomicilio(e.target.value)}
          />

          <label for="inputEdad" className="form-label">
            Seccione edad:
          </label>
          <select
            id="inputEdad"
            className="form-select"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          >
            <option selected>Seleccione edad</option>
            <option>Cachorro</option>
            <option>Joven</option>
            <option>Adulto</option>
          </select>

          <label for="inputRaza" className="form-label">
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

          <label for="inputEdad" className="form-label">
            Seccione Tamaño:
          </label>
          <select
            id="inputEdad"
            className="form-select"
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
          >
            <option selected>Seleccione tamaño</option>
            <option>Chico</option>
            <option>Mediano</option>
            <option>Grande</option>
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
          {/* <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#mapeModal"
                style={{ backgroundColor: "#CEEDC7" }}
                >
                Click para abrir el Mapa
              </button> */}
          {/* <!-- Modal --> */}
          {/* <div
                className="modal fade"
                id="mapModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                >
                <div className="modal">
                <div
                className="modal-content"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#36544F",
                  borderWidth: "3px",
                  backgroundColor: "#FFF6BD",
                }}
              > */}
          <Mapa />
          {/* </div>
                </div>
              </div> */}
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-secondary w-25"
            style={{ color: "black", backgroundColor: "RGB(134, 200, 188)" }}
          >
            Publicar Anuncio
          </button>
        </div>
      </form>
    </div>
  );
};
