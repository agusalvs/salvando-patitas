import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
// import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { FooterVariable } from "./component/footervariable.jsx";
import { Navbar } from "./component/navbar";
<<<<<<< HEAD
// import { Footer } from "./component/footer.jsx";
// import { Footerhome } from "./component/footerhome.jsx";
// import { useRouteMatch } from "react-router-dom";
// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
=======
import { Footer } from "./component/footer";
import { Formulario } from "./pages/vistaRegistro";

// import { Login } from "./component/login";

// create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
>>>>>>> eb669b0d5d48aeaebfef8c00a54a06fd36b33e9b
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
<<<<<<< HEAD
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1> Not found! </h1>} />{" "}
          </Routes>{" "}
          <FooterVariable />
=======
            <Route element={<Formulario />} path="/formulario" />
            {/* <Route element={<Demo />} path="/demo" /> */}
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
>>>>>>> eb669b0d5d48aeaebfef8c00a54a06fd36b33e9b
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
