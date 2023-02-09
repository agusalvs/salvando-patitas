import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Publicar = () => {
  return (
    <div className="card-body">
      <form className="row g-3">
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
          <input type="number" className="form-control" id="inputTel" placeholder="Ingrese su telefono de contacto"/>
        </div>
        <div className="col-md-6">
          <label for="inputState" className="form-label">
            Seccione edad:
          </label>
          <select id="inputState" className="form-select">
            <option selected>Seleccione edad</option>
            <option>Cachorro</option>
            <option>Joven</option>
            <option>Adulto</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputState" className="form-label">
            Seccione genero:
          </label>
          <select id="inputState" className="form-select">
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
          <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
          <label for="#elegir">A continuacion puede subir una foto de la mascota: </label>
          <input id="elegir" name="uploadedfile" type="file" /><br />
          <input type="submit" class="ui blue inline button" value="Subir archivo" />
        </div>
        
      </div>
      </form>
    </div>

  );
};
