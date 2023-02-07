import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Perdidos } from "../component/perdidos.jsx";
import { Encontrados } from "../component/encontrados.jsx";
import { Adopción } from "../component/adopcion.jsx";
import { Inicio } from "../component/inicio.jsx";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    // <!-- Page Content -->
    <div className="container-fluid bg-white">
      {/* <!-- First Featurette --> */}
      <Inicio />
      <h2 className="ms-5 ps-5">Characters</h2>
      <div
        className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square"
        style={{ width: "90%" }}
      >
        {store.characters.map((props) => (
          <div className="col">
            <Perdidos name={props.name} id={props.uid} key={props.uid} />
          </div>
        ))}
      </div>
      {/* <Encontrados />
      <Adopción /> */}
    </div>
  );
};
