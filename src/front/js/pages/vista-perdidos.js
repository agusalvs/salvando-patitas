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
      <div className="col-md-2 pe-0" style={{ backgroundColor: "#FFD4B2" }}>
        {" "}
        <Busquedafiltros />
      </div>

      <div
        className="container-fluid py-5 text-center mx-auto col-md-10"
        id="vista-perdidos"
        style={{ backgroundColor: "#FFF6BD" }}
      >
        <h1 style={{ color: "#36544F" }}>Perdidos</h1>
        <p className="pb-4" style={{ color: "#36544F" }}>
          Aquí podrás ver todos los animalitos que se encuentran actualmente
          perdidos.
        </p>
        <div className="d-flex px-5">
          {/* <button
            className="border-0"
            onClick={() => scroll(-180)}
            style={{ backgroundColor: "#FFF6BD" }}
          >
            <i
              className="fa fa-chevron-left"
              style={{ fontSize: "100px", color: "#36544F" }}
            ></i>
          </button> */}
          <div
            className="row mx-auto "
            // style={{ width: "70%", scrollBehavior: "smooth" }}
            // ref={ref}
          >
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
