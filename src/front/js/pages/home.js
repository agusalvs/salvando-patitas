import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Inicio } from "../component/inicio.jsx";
import { Perdidos } from "../component/perdidos.jsx";
// import { Encontrados } from "../component/encontrados.jsx";
// import { Adopción } from "../component/adopcion.jsx";
import "../../styles/home.css";
import { element } from "prop-types";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.mascotasHome();
  }, []);

  console.log(store.mascotas);

  return (
    // <!-- Page Content -->
    <div className="container-fluid bg-white">
      {/* <!-- First Featurette --> */}
      <Inicio />

      <div
        class="container-fluid py-5"
        id="portfolio"
        style={{ backgroundColor: "#FFF6BD" }}
      >
        <h1>Animales</h1>
        <p>
          En esta sección podrás ver todos los animalitos que se encuentran
          actualmente perdidos, encontrados o en adopción.
        </p>
        {/* <p>
          En esta sección podrás ver todos los animalitos que se encuentran
          actualmente perdidos. Cualquier información que desees aportar, puedes
          ponerte en contacto con quien hizo la publicación ingresando en "más
          información".
        </p> */}
        {/* <div class="row">
          <div class="col-4"> */}
        <div
          className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square"
          style={{ width: "90%" }}
        >
          {store.mascotas?.map((item, index) => (
            <div className="col">
              <Perdidos
                titulo={item?.titulo}
                descripcion={item.descripcion}
                foto1={item.foto1}
                key={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};
