import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { Perdidos } from "./pages/vista-perdidos.js";
import { Single } from "./pages/single";
import { Vistaenviarcorreo } from "./pages/vistaEnviarcorreo";
import { FooterVariable } from "./component/footervariable.jsx";
import { Navbar } from "./component/navbar";
import { Formulario } from "./pages/vistaRegistro";
import { Contactus } from "./pages/contactus.js";
import { PublicacionNueva } from "./pages/vistaPublicacion";
import { RecuperarContraseña } from "./pages/vistaRecuperar";
import { Encontrados } from "./pages/vista-encontrados";
import { Adopcion } from "./pages/vista-adopcion";
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
            <Route element={<PublicacionNueva />} path="/publicar" />
            <Route element={<Formulario />} path="/registro" />{" "}
            <Route element={<Vistaenviarcorreo />} path="/recuperar" />{" "}
            <Route element={<Single />} path="/mascotas/:id" />
            <Route element={<h1> Not found! </h1>} />
            <Route element={<Contactus />} path="/contacto" />
            <Route
              element={<RecuperarContraseña />}
              path="/cambiar-contrasena"
            />
            <Route element={<Perdidos />} path="/perdidos" />
            <Route element={<Encontrados />} path="/encontrados" />
            <Route element={<Adopcion />} path="/en-adopcion" />
          </Routes>{" "}
          <FooterVariable />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
