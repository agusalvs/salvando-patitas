import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Footer } from "../component/footer.jsx";
import { Footerhome } from "../component/footerhome.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  // const { store, actions } = useContext(Context);
  return (
    <>
      <h1> </h1> <Footerhome />
    </>
  );
};
