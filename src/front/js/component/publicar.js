import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Publicar = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div className="card-body">
      <form 
      className="row g-3">
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
          />

        </div>
        <div className="col-md-6">
          <label for="inputState" className="form-label">
            Seccion en la que publica:
          </label>
          <select id="inputState" className="form-select">
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
          <input type="text" className="form-control" id="inputNombre" placeholder="Escriba aqui el nombre de su mascota"/>
        </div>
        <div className="col-6">
          <label for="inputDireccion" className="form-label">
           Direccion
          </label>
          <input type="text" className="form-control" id="inputDireccion" placeholder="Direccion" />
        </div>
        <div className="col-6">
          <label for="inputNombre" className="form-label">
           Telefono
          </label>
          <input type="number" className="form-control" id="inputTelefono" placeholder="Ingrese su telefono de contacto"/>
        </div>
        <div className="col-md-6">
          <label for="inputEdad" className="form-label">
            Seccione edad:
          </label>
          <select id="inputEdad" className="form-select">
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
          <select id="inputGenero" className="form-select">
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
            placeholder="Ingrese la raza de su mascota"></input>
            </div>
            <div class="col-md-12">
                        <label>Comentarios</label>
                        <div className="input-group" placeholder="Ingrese comentarios">
                            <textarea class="form-control" rows="4"></textarea>
                          
                        </div>
                    </div>
            <div class="ui segment">
        <div class="field">
          <label for="#elegir">A continuacion puede subir una foto de la mascota: </label><br/>
          <input id="elegir" name="uploadedfile" type="file" onChange={handleFileChange}  /><br />

        </div>
        <br />
        {image && <img src={image} alt="Uploaded Image"  width="100" height="100"/>}
<br />
      </div>
      </form>
    
      <button type="button" class="btn btn-secondary" style={{ color: "black", backgroundColor: "RGB(134, 200, 188)" }}>Publicar Anuncio</button>
    </div>

  );
};