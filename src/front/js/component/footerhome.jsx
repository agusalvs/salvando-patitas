import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footerhome = () => (
  <footer>
    <div
      className="footer text-center p-4 mb-0 mp-2 w-100 h-auto"
      style={{ backgroundColor: "rgb(134, 200, 188)" }}
    >
      <div className="text-start m-3 fs-5 d-flex justify-content-between">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div
            className="accordion-item"
            style={{ backgroundColor: "#FFF6BD" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                style={{ backgroundColor: "#86C8BC" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <i className="fas fa-users me-2"></i> Sobre nosotros
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <strong>
                  Somos una asociación civil uruguaya sin fines de lucro
                </strong>{" "}
                fundada el 3 de febrero de 2023. Buscamos el bienestar de todos
                los animales fomentando la adopción responsable. También nos
                centramos en participar activamente en la búsqueda y divulgación
                de aquellas mascotas que se han perdido y las que han sido
                encontradas, con el fin de que puedan volver a sus hogares con
                sus familias.
              </div>
            </div>
          </div>

          <div
            className="accordion-item"
            style={{ backgroundColor: "#FFF6BD" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed me-2"
                style={{ backgroundColor: "#86C8BC" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <i className="fas fa-question-circle me-2"></i> Preguntas
                frecuentes
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    {" "}
                    <strong>¿Cómo publicar animales perdidos?</strong>
                    <br></br>
                    Debes dirigirte a la seccion "Perdidos" y alli encontrarás
                    un formulario donde puedes ingresar todas las
                    características, información y comentarios que creas
                    relevantes para que pueda ser mas fácil ubicar a tu mascota
                  </li>
                  <li>
                    <strong>¿Cómo publicar animales encontrados?</strong>
                    <br></br>
                    Debes dirigirte a la seccion "Encontrados" y alli tendrás
                    disponible un formulario donde puedes ingresar todas las
                    características, información y comentarios que creas
                    relevantes para que la familia de esa mascota pueda ubicarla
                    y reencontrarse con ella lo mas pronto posible
                  </li>
                  <li>
                    <strong>
                      ¿Qué pasos debo seguir para poder adoptar una mascota?
                    </strong>
                    <br></br>
                    Hay muchos animales en Salvando Patitas esperando tener una
                    familia. Si deseas adoptar a alguno de ellos, es importante
                    que puedes completar el formulario que aparece en la sección
                    "En adopción" para coordinar tu visita. En el correr de los
                    días siguientes, nos comunicaremos contigo por mail y/o
                    teléfono para agendar.
                  </li>
                  <li>
                    {" "}
                    <strong>¿De qué manera puedo hacer donaciones?</strong>
                    <br></br>
                    Si deseas colaborar con Salvando Patitas pudes hacerlo a
                    través de nuestra cuenta de Mercado Pago o comunícate con
                    nosotros por correo electrónico
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ backgroundColor: "#FFF6BD" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                style={{ backgroundColor: "#86C8BC" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <i className="fas fa-envelope me-2"></i>
                Contáctanos
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <a href="/contacto" className="dropdown-item">
                  Haz click aquí para dirigirte hacia nuestro formulario de
                  contacto.{" "}
                </a>
                {/* <strong>salvandopatitas@gmail.com</strong> */}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <p>
            {/* inicia sesion con facebook */}
            <a href="https://www.facebook.com/profile.php?id=100090599072422">
              <i className="fab fa-facebook m-3 fs-1 text-muted"></i>
            </a>

            {/* inicia sesion con twitter */}
            <a href="https://twitter.com/Patita8Salvando">
              <i className="fab fa-twitter m-3 fs-1 text-muted"></i>
            </a>

            {/* inicia sesion con instagram */}
            <a href="https://www.instagram.com/salvandopatitas28/">
              <i className="fab fa-instagram m-3 fs-1 text-muted"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="mt-auto py-1 text-center text-white fw-normal">
        ©2023 SalvandoPatitas.com Todos los derechos reservados.
      </div>
    </div>
  </footer>
);
