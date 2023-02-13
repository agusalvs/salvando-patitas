import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Inicio } from "../component/inicio.jsx";
import { Mascotas } from "../component/mascotas.jsx";
// import { Encontrados } from "../component/encontrados.jsx";
// import { Adopción } from "../component/adopcion.jsx";
// import Login from "../component/login.jsx";
// import { Footer } from "../component/footer.jsx";
// import { Footerhome } from "../component/footerhome.jsx";
// import { Link } from "react-router-dom";
import "../../styles/home.css";
// import { element } from "prop-types";

export const Home = () => {
  const { store, actions } = useContext(Context);
  // const params = useParams();

  useEffect(() => {
    actions.mascotasHome();
  }, []);

  const perdidos = store.mascotas.filter(
    (mascota) => mascota.estado == "Perdido"
  );

  const encontrados = store.mascotas.filter(
    (mascota) => mascota.estado == "Encontrado"
  );

  const adopcion = store.mascotas.filter(
    (mascota) => mascota.estado == "En adopción"
  );

  return (
    // <!-- Page Content -->
    <div className="mx-auto">
      {/* <!-- First Featurette --> */}
      <Inicio />

      <div
        className="container-fluid py-5 text-center justify-content-center align-items-center mx-auto"
        id="perdidos"
        style={{ backgroundColor: "#FFF6BD" }}
      >
        <h1 style={{ color: "#36544F" }}>Perdidos</h1>
        <p style={{ color: "#36544F" }}>
          En esta sección podrás ver todos los animalitos que se encuentran
          actualmente perdidos, encontrados o en adopción.
        </p>
        <div
          className="row mx-auto justify-content-center flex-nowrap overflow-auto scrollbar scrollbar-black bordered-black round"
          style={{ width: "90%" }}
        >
          {perdidos.map((item) => (
            <div className="col mx-auto d-flex justify-content-center align-items-center">
              <Mascotas
                backgroundColor={"#CEEDC7"}
                titulo={item?.titulo}
                descripcion={item.descripcion}
                foto1={item.foto1}
                key={item}
                id={item.id}
              />
            </div>
          ))}
        </div>
        <div className="card-footer bg-transparent justify-content-center">
          <a
            href={"/perdidos"}
            className="btn btn-light mt-4"
            style={{
              width: "160px",
              color: "white",
              backgroundColor: "#36544F",
              opacity: "50%",
            }}
          >
            Ver más
          </a>
        </div>
      </div>
      <div
        className="container-fluid py-5 text-center"
        id="encontrados"
        style={{ backgroundColor: "#FFD4B2" }}
      >
        <h1 style={{ color: "#36544F" }}>Encontrados</h1>
        <p style={{ color: "#36544F" }}>
          En esta sección podrás ver todos los animalitos que se encuentran
          actualmente encontrados, encontrados o en adopción.
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
            <div className="col mx-auto d-flex justify-content-center align-items-center">
              <Mascotas
                backgroundColor={"#FFF6BD"}
                titulo={item?.titulo}
                descripcion={item.descripcion}
                foto1={item.foto1}
                key={item}
                id={item.id}
              />
            </div>
          ))}
        </div>
        <div className="card-footer bg-transparent justify-content-center">
          <a
            href={"/perdidos"}
            className="btn btn-light mt-4"
            style={{
              width: "160px",
              color: "white",
              backgroundColor: "#36544F",
              opacity: "50%",
            }}
          >
            Ver más
          </a>
        </div>
      </div>
      <div
        className="container-fluid py-5 text-center"
        id="adopcion"
        style={{ backgroundColor: "#CEEDC7" }}
      >
        <h1 style={{ color: "#36544F" }}>En adopción</h1>
        <p style={{ color: "#36544F" }}>
          En esta sección podrás ver todos los animalitos que se encuentran
          actualmente encontrados, encontrados o en adopción.
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
          {adopcion.map((item) => (
            <div className="col mx-auto d-flex justify-content-center align-items-center">
              <Mascotas
                backgroundColor={"#FFD4B2"}
                titulo={item?.titulo}
                descripcion={item.descripcion}
                foto1={item.foto1}
                key={item}
                id={item.id}
              />
            </div>
          ))}
        </div>
        <div className="card-footer bg-transparent justify-content-center">
          <a
            href={"/perdidos"}
            className="btn btn-light mt-4"
            style={{
              width: "160px",
              color: "white",
              backgroundColor: "#36544F",
              opacity: "50%",
            }}
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};
