import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Mapa } from "../component/mapa.jsx";

export const Publicar = () => {
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
  //declaro estados para subir la imagen
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const subirImagen = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/de1k9ojw2/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    // console.log(res);
    setImage(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
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

  return (
    <div className="card-body px-5">
      <div id="titulo-publicar" className="text-center">
        <p className="mb-2 fs-2" style={{ color: "#36544F" }}>
          {" "}
          Publicar anuncio{" "}
        </p>
        <p className="mb-5 fw-light" style={{ color: "#64748B" }}>
          Complete los siguientes campos para realizar una nueva publicación:{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit(enviarDatos)} className="row g-3">
        {/* COLUMNA IZQUIERDA */}{" "}
        <div className="col-md-6">
          <input
            {...register("titulo", {
              required: "Debe ingresar un título",
            })}
            type="text"
            className="form-control mb-4"
            id="inputTitulo"
            placeholder="Título para su publicación"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          />{" "}
          {errors.titulo && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.titulo?.message}
            </p>
          )}
          <input
            type="text"
            className="form-control mb-4"
            id="inputNombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de la mascota"
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          />
          <input
            {...register("telefono", {
              required: "Debe ingresar un teléfono de contacto",
            })}
            type="number"
            className="form-control mb-4"
            id="inputTelefono"
            placeholder="Teléfono de contacto"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          />{" "}
          {errors.telefono && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.telefono?.message}
            </p>
          )}
          <select
            id="inputGenero"
            className="form-select mb-4"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          >
            <option defaultValue>Seleccione género</option>
            <option>Macho</option>
            <option>Hembra</option>
            <option>Desconocido</option>
          </select>
          <select
            {...register("inputState", {
              required: "Seleccione una de las secciones",
            })}
            id="inputState"
            className="form-select mb-4"
            value={inputState}
            onChange={(e) => setinputState(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
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
          <input
            {...register("direccion", {
              required: "Ingrese una dirección",
            })}
            type="text"
            className="form-control mb-4"
            id="inputDireccion"
            placeholder="Ubicación"
            value={direccion}
            onChange={(e) => setDomicilio(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          />{" "}
          {errors.direccion && (
            <p role="alert" style={{ color: "#ff6b60" }}>
              {errors.direccion?.message}
            </p>
          )}
        </div>{" "}
        {/* COLUMNA DERECHA */}
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mb-4"
            id="inputCategoria"
            placeholder="Categoría de animal (ej.: gato, perro, conejo, etc.)"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          />{" "}
          <select
            id="inputEdad"
            className="form-select mb-4"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          >
            <option defaultValue>Seleccione edad</option>
            <option>Cachorro (menos de 1 año)</option>
            <option>Joven (1-3 años)</option>
            <option>Adulto (3-8 años)</option>
            <option>Senior (+8 años)</option>
          </select>
          <input
            type="text"
            className="form-control mb-4"
            id="inputRaza"
            placeholder="Raza de la mascota"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          ></input>
          <select
            id="inputTamaño"
            className="form-select mb-4"
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#FFF6BD",
              opacity: "75%",
              fontSize: "15px",
            }}
          >
            <option defaultValue>Seleccione tamaño</option>
            <option>Pequeño (0-10 kgs)</option>
            <option>Mediano (11-27 kgs)</option>
            <option>Grande (28-45 kgs)</option>
            <option>XL (+46 kgs)</option>
          </select>
          <div className="input-group">
            <textarea
              className="form-control pt-2 mb-4"
              placeholder="Descripción"
              rows="2"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              style={{
                borderRadius: "2rem",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            ></textarea>
          </div>
          <div
            className="ui segment "
            style={{
              height: "75px",
            }}
          >
            <div
              className="field w-50"
              style={{
                width: "580px",
                height: "40px",
                borderRadius: "2rem",
                border: "solid",
                borderColor: "#86C8BC",
                borderWidth: "2px",
                backgroundColor: "#FFF6BD",
                opacity: "75%",
                fontSize: "15px",
              }}
            >
              <br />
              <label
                htmlFor="files"
                className="btn"
                style={{ marginTop: "-30px" }}
              >
                <i className="fa fa-upload me-2"></i>Seleccione una imagen
              </label>
              <input
                {...register("image", {
                  required: "Debe ingresar una imagen del animal",
                })}
                id="files"
                className="mb-4"
                name="uploadedfile"
                type="file"
                onChange={subirImagen}
                style={{
                  width: "580px",
                  height: "40px",
                  borderRadius: "2rem",
                  borderColor: "#86C8BC",
                  // borderWidth: "2px",
                  // backgroundColor: "#FFF6BD",
                  // opacity: "75%",
                  // fontSize: "15px",
                  visibility: "hidden",
                }}
              />
              {/* {loading ? (
                <h3> Cargando Imágenes… </h3>
              ) : (
                <img src={image} style={{ width: "30px" }} />
              )} */}
              {errors.image && (
                <p role="alert" style={{ color: "#ff6b60" }}>
                  {errors.image?.message}
                </p>
              )}
            </div>
            {image && (
              <img
                src={image}
                alt="Uploaded Image"
                width="100"
                height="100"
                style={{
                  borderRadius: "2rem",
                  borderColor: "#86C8BC",
                  borderWidth: "2px",
                  backgroundColor: "#FFF6BD",
                  opacity: "75%",
                  fontSize: "15px",
                }}
              />
            )}{" "}
            <br />
          </div>{" "}
        </div>
        <div className="nav-item">
          <Mapa />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn"
            style={{
              borderRadius: "2rem",
              borderColor: "#86C8BC",
              borderWidth: "2px",
              backgroundColor: "#86C8BC",
              color: "white",
              width: "400px",
            }}
          >
            Continuar{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};
