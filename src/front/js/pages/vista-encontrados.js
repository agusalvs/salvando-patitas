import React, { useContext, useEffect, useRef } from "react";
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
import { Busquedafiltros } from "../component/busquedafiltros.jsx";

export const Encontrados = () => {
  const { store, actions } = useContext(Context);
  // const params = useParams();

  useEffect(() => {
    actions.mascotasHome();
  }, []);

  const encontrados = store.mascotas.filter(
    (mascota) => mascota.estado == "Encontrado"
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
    <div className="mx-auto pt-5">
      {/* <!-- First Featurette --> */}
      {/* <Inicio /> */}

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
            {encontrados.map((item) => (
              <div className="col mx-auto">
                <Mascotas
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
          {/* <button
            className="border-0"
            onClick={() => scroll(180)}
            style={{ backgroundColor: "#FFF6BD" }}
          >
            <i
              className="fa fa-chevron-right"
              style={{ fontSize: "100px", color: "#36544F" }}
            ></i>
          </button> */}
        </div>
        {/* <div className="card-footer bg-transparent justify-content-center">
          <a
            href={"/encontrados"}
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
        </div> */}
      </div>
      {/* <div
        className="container-fluid py-5 text-center"
        id="encontrados"
        style={{ backgroundColor: "#FFD4B2" }}
      >
        <h1 style={{ color: "#36544F" }}>Encontrados</h1>
        <p className="pb-4" style={{ color: "#36544F" }}>
          En esta sección podrás ver todos los animalitos que se encuentran
          actualmente encontrados.
        </p>
        <div className="d-flex px-5">
          <button
            className="border-0"
            onClick={() => scroll(-180)}
            style={{ backgroundColor: "#FFD4B2" }}
          >
            <i
              className="fa fa-chevron-left"
              style={{ fontSize: "100px", color: "#36544F" }}
            ></i>
          </button>
          <div
            className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square"
            style={{ width: "70%" }}
          >
            {encontrados.map((item) => (
              <div className="col mx-auto">
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
          <button
            className="border-0"
            onClick={() => scroll(180)}
            style={{ backgroundColor: "#FFD4B2" }}
          >
            <i
              className="fa fa-chevron-right"
              style={{ fontSize: "100px", color: "#36544F" }}
            ></i>
          </button>
        </div>
        <div className="card-footer bg-transparent justify-content-center">
          <a
            href={"/encontrados"}
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
        <p className="pb-4" style={{ color: "#36544F" }}>
          En esta sección podrás ver todos los animalitos que se encuentran
          actualmente en adopción.
        </p>
        <div className="d-flex px-5">
          <button
            className="border-0"
            onClick={() => scroll(-180)}
            style={{ backgroundColor: "#CEEDC7" }}
          >
            <i
              className="fa fa-chevron-left"
              style={{ fontSize: "100px", color: "#36544F" }}
            ></i>
          </button>
          <div
            className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square"
            style={{ width: "70%" }}
          >
            {adopcion.map((item) => (
              <div className="col mx-auto">
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
          <button
            className="border-0"
            onClick={() => scroll(180)}
            style={{ backgroundColor: "#CEEDC7" }}
          >
            <i
              className="fa fa-chevron-right"
              style={{ fontSize: "100px", color: "#36544F" }}
            ></i>
          </button>
        </div>
        <div className="card-footer bg-transparent justify-content-center">
          <a
            href={"/en-adopcion"}
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
      </div> */}
      <Busquedafiltros />
    </div>
    //   </div>
    // </div>
  );
};
