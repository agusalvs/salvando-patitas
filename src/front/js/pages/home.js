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
      <Perdidos />
      <Encontrados />
      <Adopción />
    </div>
  );
};
