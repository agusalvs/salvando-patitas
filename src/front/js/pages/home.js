import React, {useContext} from "react";
import {Context} from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Footer } from "../component/footer.jsx";
import { Footerhome } from "../component/footerhome.jsx";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export const Home = () => {
  // const { store, actions } = useContext(Context);
  return (
    <>
      <h1> </h1> <Footerhome />
    </>
=======
// import Login from "../component/login.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="pb-5" style={{ backgroundColor: "white" }}>
      <h1> Bienvenida </h1>
    </div>
>>>>>>> eb669b0d5d48aeaebfef8c00a54a06fd36b33e9b
  );
};
