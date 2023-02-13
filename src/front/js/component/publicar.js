import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Publicar = () => {
  const [image, setImage] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDomicilio] = useState("");
  const [raza, setRaza] = useState("");
  const [inputState, setinputState] = useState("");
  const [seccionEnLaQuePublica, setSeccionEnLaQuePublica] = useState("");
  const [nombre,setNombre]= useState("")
  const [comentarios,setComentarios]= useState("")
  

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
    e.preventDefault();
   
    actions.publicar(
      titulo,
      telefono,
      genero,
      direccion,
      raza,
      inputState,
      comentarios,
      id,
      edad,
      image)
    setTitulo("");
    setEdad("");
    setGenero("");
    setTelefono("");
    setDomicilio("");
    setRaza("");
    setinputState("");
    setImage("");
  }

  return (
    <div className="card-body">
      <form onSubmit={enviarDatos} className="row g-3">
        <div className="alert alert-danger" role="alert">
          Complete los siguientes campos para realizar una nueva publicacion:
        </div>

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
        </div>
        <div className="col-md-6">
          <label for="inputState" className="form-label">
            Seccion en la que publica:
          </label>
          <select
            id="inputState"
            className="form-select"
            value={seccionEnLaQuePublica}
            onChange={(e) => setSeccionEnLaQuePublica(e.target.value)}
          >
            <option selected>Seleccione estado</option>
            <option>Perdido</option>
            <option>Encontrado</option>
            <option>En Adopcion</option>
          </select>
        </div>

        <div className="col-6">
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
        </div>
        <div className="col-6">
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
        </div>
        <div className="col-6">
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
        </div>
        <div className="col-md-6">
          <label for="inputEdad" className="form-label">
            Seccione edad:
          </label>
          <select id="inputEdad" className="form-select"
           value={edad}
           onChange={(e) => setEdad(e.target.value)}>
            <option selected>Seleccione edad</option>
            <option>Cachorro</option>
            <option>Joven</option>
            <option>Adulto</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputGenero" className="form-label">
            Seccione genero:
          </label>
          <select id="inputGenero" className="form-select" value={genero}
           onChange={(e) => setGenero(e.target.value)}>
            <option selected>Seleccione genero</option>
            <option>Macho</option>
            <option>Hembra</option>
            <option>Desconocido</option>
          </select>
        </div>
        <div className="col-md-6">
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
        </div>
        <div class="col-md-12">
          <label>Comentarios</label>
          <div className="input-group" 
          placeholder="Ingrese comentarios">

            <textarea class="form-control" rows="4"value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}></textarea>
        
          </div>
        </div>
        <div class="ui segment">
          <div class="field">
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
            <br />
          </div>
          <br />
          {image && (
            <img src={image} alt="Uploaded Image" width="100" height="100" />
          )}
          <br />
        </div>
       <div className="d-flex justify-content-center">
        <button
          type="submit"
          class="btn btn-secondary w-25"
          style={{ color: "black", backgroundColor: "RGB(134, 200, 188)" }}
        >
          Publicar Anuncio
        </button>
        </div>
      </form>
    </div>
  );
};
