import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footerhome = () => (
  <footer>
    <div
      className="footer text-center p-4 mb-0 mp-2 fixed-bottom w-100 h-auto"
      style={{ backgroundColor: "rgb(134, 200, 188)" }}
    >
      <Link className="text-reset fw-bold" to="https://mdbootstrap.com/"></Link>

      <div className="text-start m-3 fw-bold fs-5 d-flex justify-content-between">
        <ul>
          <li>Sobre nosotros</li>
          <li>E-mail de empresa</li>
          <li>Preguntas frecuentes</li>
        </ul>

        <div className="d-flex justify-content-end">
          <p>
            {/* inicia sesion con facebook */}
            <a href="https://es-la.facebook.com/login/device-based/regular/login/">
              <i className="fab fa-facebook m-3 fs-1 text-muted"></i>
            </a>

            {/* inicia sesion con twitter */}
            <a href="https://twitter.com/i/flow/login">
              <i className="fab fa-twitter m-3 fs-1 text-muted"></i>
            </a>

            {/* inicia sesion con instagram */}
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram m-3 fs-1 text-muted"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="mt-auto py-5 text-center text-white fw-normal">
        ©2023 SalvandoPatitas.com All rights reserved.
      </div>
    </div>
  </footer>
);
