import React, { useContext, useEffect, useRef } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Mascotas } from "../component/mascotas.jsx";
// import { Encontrados } from "../component/encontrados.jsx";
// import { Adopción } from "../component/adopcion.jsx";
// import { Link } from "react-router-dom";
import { Busquedafiltros } from "../component/busquedafiltros.jsx";

export const Adopcion = () => {
  const { store, actions } = useContext(Context);
  // const params = useParams();

  useEffect(() => {
    actions.mascotasHome();
  }, []);

  const adopcion = store.mascotas.filter(
    (mascota) => mascota.estado == "En adopción"
  );

  const ref = useRef(null);

  return (
    // <!-- Page Content -->
    <div className="row vh-100" style={{ bsGutterX: "0" }}>
      {/* <!-- First Featurette --> */}
      <div className="col-md-2" style={{ backgroundColor: "#FFF6BD" }}>
        {" "}
        <Busquedafiltros backgroundColor={"#FFD4B2"} borderColor={"#FFD4B2"} />
      </div>

      <div
        className="container-fluid py-5 text-center mx-auto col-md-10"
        id="vista-adopcion"
        style={{ backgroundColor: "#CEEDC7", color: "#36544F" }}
      >
        <h1 style={{ color: "#36544F" }}>En adopción</h1>
        <p className="pb-4" style={{ color: "#36544F" }}>
          Aquí podrás ver todos los animalitos que se encuentran actualmente en
          adopcion.
        </p>
        <div className="d-flex px-5">
          <div className="row mx-auto ">
            {adopcion.map((item) => (
              <div className="col mx-auto">
                <Mascotas
                  width={"12rem"}
                  height={"20rem"}
                  backgroundColor={"#FFD4B2"}
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
