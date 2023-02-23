import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Pets } from "../component/pets.jsx";
import "../../styles/home.css";
// import { element } from "prop-types";
import { Busquedafiltros } from "../component/busquedafiltros.jsx";

export const Encontrados = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.mascotasHome();
  }, []);

  const encontrados = store.mascotas.filter(
    (mascota) => mascota.estado == "Encontrado"
  );

  return (
    // <!-- Page Content -->
    <div className="row " style={{ bsGutterX: "0" }}>
      <div className="col-md-2">
        {" "}
        <Busquedafiltros />
      </div>

      <div
        className="container-fluid  text-center mx-auto col-md-10"
        id="vista-encontrados"
        style={{ backgroundColor: "#FFD4B2" }}
      >
        <h1 style={{ color: "#36544F" }}>Encontrados</h1>
        <p className="pb-4" style={{ color: "#36544F" }}>
          Aquí podrás ver todos los animalitos que se encuentran actualmente
          encontrados.
        </p>
        <div className="d-flex px-5">
          <div className="row mx-auto ">
            {encontrados.map((item) => (
              <div className="col mx-auto">
                <Pets
                  width={"12rem"}
                  height={"20rem"}
                  backgroundColor={"#FFF6BD"}
                  titulo={item?.titulo}
                  //   descripcion={item.descripcion}
                  foto1={item.foto1}
                  key={item}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
