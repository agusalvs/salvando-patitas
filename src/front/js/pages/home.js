import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Login from "../component/login.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="text-center mt-5"
      style={{ backgroundColor: "RGB(255, 212, 178)" }}
    >
      <Login />
    </div>
  );
};
