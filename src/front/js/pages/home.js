import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Footer } from "../component/footer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  //const { store, actions } = useContext(Context);

  return (
    // <footer>
    //   <div className="text-center p-4" style={{ backgroundColor: "teal" }}>
    //     ©2023 SalvandoPatitas.com All rights reserved.
    //     <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">
    //       MDBootstrap.com
    //     </Link>
    //   </div>
    // </footer>
    <Footer />
  );
};
