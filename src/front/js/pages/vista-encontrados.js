import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Pets } from "../component/pets.jsx";
import "../../styles/home.css";

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
    <div className="mx-auto">
      <div
        className="container-fluid py-5 text-center mx-auto"
        id="vista-encontrados"
        style={{ backgroundColor: "#FFF6BD" }}
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
                  backgroundColor={"#CEEDC7"}
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
