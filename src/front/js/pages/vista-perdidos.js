import React, { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Pets } from "../component/pets.jsx";
import "../../styles/home.css";
import { Busquedafiltros } from "../component/busquedafiltros.jsx";

export const Perdidos = () => {
  const { store, actions } = useContext(Context);
  // const params = useParams();

  useEffect(() => {
    actions.mascotasHome();
  }, []);

  const perdidos = store.mascotas.filter(
    (mascota) => mascota.estado == "Perdido"
  );

  // const encontrados = store.mascotas.filter(
  //   (mascota) => mascota.estado == "Encontrado"
  // );

  // const adopcion = store.mascotas.filter(
  //   (mascota) => mascota.estado == "En adopción"
  // );

  const ref = useRef(null);

  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };

  return (
    // <!-- Page Content -->
    <div className="row vh-100" style={{ bsGutterX: "0" }}>
      {/* <!-- First Featurette --> */}
      {/* <Inicio /> */}
      <div className="col-md-2 " style={{ backgroundColor: "#FFD4B2" }}>
        {" "}
        <Busquedafiltros backgroundColor={"#CEEDC7"} borderColor={"#CEEDC7"} />
      </div>

      <div
        className="container-fluid py-5 text-center mx-auto col-md-10"
        id="vista-perdidos"
        style={{ backgroundColor: "#FFF6BD", color: "#36544F" }}
      >
        <h1 style={{ color: "#36544F" }}>Perdidos</h1>
        <p className="pb-4" style={{ color: "#64748B" }}>
          Aquí podrás ver todos los animalitos que se encuentran actualmente
          perdidos.
        </p>
        <div className="d-flex px-5">
          <div className="row mx-auto ">
            {perdidos.map((item) => (
              <div className="col mx-auto">
                <Pets
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
