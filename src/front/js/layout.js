import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
// import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Vistaenviarcorreo } from "./pages/vistaEnviarcorreo";
import { FooterVariable } from "./component/footervariable.jsx";
import { Navbar } from "./component/navbar";
import { Formulario } from "./pages/vistaRegistro";
import { Contactus } from "./pages/contactus.js";
import { PublicacionNueva } from "./pages/vistaPublicacion";

// import { Login } from "./component/login";

// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<PublicacionNueva />} path="/publicacion" />
            <Route element={<Formulario />} path="/registro" />{" "}
            <Route element={<Vistaenviarcorreo />} path="/recuperar" />{" "}
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Contactus />} path="/contacto" />
          </Routes>{" "}
          <FooterVariable />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
