import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";

export const Busquedafiltros = (props) => {
  const [tipodeanimal, setTipodeanimal] = useState("");
  const [raza, setRaza] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [genero, setGenero] = useState("");
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.mascotasHome();
  }, []);
  console.log(tipodeanimal);
  const buscarAnimales = () => {
    actions.filterSearch(tipodeanimal, raza, tamaño, genero);

    setTipodeanimal("");
    setRaza("");
    setTamaño("");
    setGenero("");
  };

  return (
    <>
      <div
        className="col-md-12 py-3 "
        style={{
          backgroundColor: props.backgroundColor,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p className="mb-2 fs-2" style={{ color: "#36544F" }}>
            Indagación
          </p>
          <p className="mb-5 fw-light" style={{ color: "#64748B" }}>
            Filtrar busqueda
          </p>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className=" d-flex justify-content-center align-items-center"
          >
            <input
              style={{
                marginBottom: "20px",
                width: "150px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
                color: "#000000",
              }}
              type="text"
              className="form-control"
              id="inputTipo"
              placeholder="Categoría"
              value={tipodeanimal}
              onChange={(e) => setTipodeanimal(e.target.value)}
            />
            <input
              style={{
                marginBottom: "20px",
                width: "150px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
              }}
              type="text"
              className="form-control"
              id="inputRaza"
              placeholder="Raza"
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
            />
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              style={{
                marginBottom: "20px",
                width: "150px",
                height: "40px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
              }}
              value={tamaño}
              onChange={(e) => setTamaño(e.target.value)}
            >
              <option value="" disabled selected>
                Tamaño
              </option>
              <option value="Pequeño">Pequeño</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </select>

            <select
              className="form-select form-select-sm"
              aria-label="Género"
              style={{
                marginBottom: "20px",
                width: "150px",
                height: "40px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
              }}
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="" disabled selected>
                Género
              </option>
              <option value="Hembra">Hembra</option>
              <option value="Macho">Macho</option>
            </select>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "190px",
                backgroundColor: "#B5F1CC",
                color: "#000000",
                borderColor: "#B5F1CC",
                borderRadius: "2rem",
              }}
              onClick={() => {
                buscarAnimales();
              }}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
