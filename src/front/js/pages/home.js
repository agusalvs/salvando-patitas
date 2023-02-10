import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Inicio } from "../component/inicio.jsx";
import { Perdidos } from "../component/perdidos.jsx";
// import { Encontrados } from "../component/encontrados.jsx";
// import { Adopción } from "../component/adopcion.jsx";
// import Login from "../component/login.jsx";
import { Footer } from "../component/footer.jsx";
import { Footerhome } from "../component/footerhome.jsx";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { element } from "prop-types";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.mascotasHome();
  }, []);

  let perdidos = store.mascotas.filter(
    (mascota) => mascota.estado == "Perdido"
  );

  let encontrados = store.mascotas.filter(
    (mascota) => mascota.estado == "Encontrado"
  );

  console.log(store.mascotas);

  return (
    // <!-- Page Content -->
    <div className="container-fluid bg-white">
      {/* <!-- First Featurette --> */}
      <Inicio />

      <div
        className="container-fluid py-5"
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
        {/* <div className="row">
          <div className="col-4"> */}
        <div
          className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square"
          style={{ width: "90%" }}
        >
          {perdidos.map((item) => (
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
      <div
        className="container-fluid py-5"
        id="portfolio"
        style={{ backgroundColor: "#FFF6BD" }}
      >
        <h1>Encontrados</h1>
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
        {/* <div className="row">
          <div className="col-4"> */}
        <div
          className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square"
          style={{ width: "90%" }}
        >
          {encontrados.map((item) => (
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
