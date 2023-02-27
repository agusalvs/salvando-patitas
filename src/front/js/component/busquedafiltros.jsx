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
        className="col-md-12 pt-5 h-100 mx-auto"
        // style={{
        //   backgroundColor: props.backgroundColor,
        // }}
      >
        <div className="text-center mx-auto">
          <p className="mb-2 fs-2" style={{ color: "#36544F" }}>
            Búsqueda
          </p>
          <p className="mb-5 fw-light" style={{ color: "#36544F" }}>
            Filtrar búsqueda
          </p>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <input
              style={{
                width: "150px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
                color: "#36544F",
              }}
              type="text"
              className="form-control mb-3"
              id="inputTipo"
              placeholder="Categoría"
              value={tipodeanimal}
              onChange={(e) => setTipodeanimal(e.target.value)}
            />
            <input
              style={{
                width: "150px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
                color: "#36544F",
              }}
              type="text"
              className="form-control mb-3"
              id="inputRaza"
              placeholder="Raza"
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
            />
            <select
              className="form-select form-select-sm mb-3"
              aria-label=".form-select-sm example"
              style={{
                width: "150px",
                height: "40px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
                color: "#36544F",
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
              <option value="Grande">XL</option>
            </select>

            <select
              className="form-select form-select-sm mb-3"
              aria-label="Género"
              style={{
                width: "150px",
                height: "40px",
                borderRadius: "2rem",
                backgroundColor: "#86C8BC",
                color: "#36544F",
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
              className="btn "
              style={{
                width: "100px",
                borderRadius: "2rem",
                color: "#36544F",
                backgroundColor: props.backgroundColor,
                borderColor: props.borderColor,
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
