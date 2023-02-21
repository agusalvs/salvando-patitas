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
            style={{ backgroundColor: "#ceedc783" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                style={{ backgroundColor: "#86C8BC", color: "#36544F" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <i
                  className="fas fa-users me-2"
                  style={{ color: "#36544F" }}
                ></i>{" "}
                Sobre nosotros
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body" style={{ color: "#36544F" }}>
                <strong>
                  Somos una asociación civil uruguaya sin fines de lucro
                </strong>{" "}
                fundada el 3 de febrero de 2023. Buscamos el bienestar de todas
                las mascotas; no solo fomentando la adopción responsable, sino
                también participando activamente en la difusión de aquellas
                mascotas que se han perdido y/o que han sido encontradas, con el
                fin de que puedan volver a sus hogares con sus familias.
              </div>
            </div>
          </div>

          <div
            className="accordion-item"
            style={{ backgroundColor: "#ceedc783" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed me-2"
                style={{ backgroundColor: "#86C8BC", color: "#36544F" }}
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
              <div className="accordion-body" style={{ color: "#36544F" }}>
                <ul>
                  <li>
                    {" "}
                    <strong>
                      ¿Cómo publicar animales perdidos, encontrados o en
                      adopción?
                    </strong>
                    <br></br>
                    Para ello puedes ingresar en la sección{" "}
                    <a
                      href="/publicar"
                      class="link-primary text-decoration-none "
                    >
                      Publicar
                    </a>{" "}
                    que se encuentra en la parte superior derecha de la
                    aplicación. Aquí, tendrás disponible un formulario donde
                    puedes ingresar todas las características, información y
                    descripción que creas relevantes para que pueda ser mas
                    fácil ubicar a tu mascota (en caso de que se encuentre
                    perdida), para que la familia de la mascota pueda ubicarla y
                    reencontrarse con ella lo más pronto posible (en caso de que
                    se haya encontrado), o simplemente para que una familia
                    interesada en adoptar pueda contactarse para poder hacer a
                    una nueva mascota parte de su hogar.
                  </li>
                  <li>
                    {" "}
                    <strong>
                      ¿Cómo puedo diferenciar, al momento de publicar, si una
                      mascota se encuentra perdida, encontrada o en adopción?
                    </strong>
                    <br></br>
                    ¡Muy fácil! Dentro del formulario para publicar, encontrarás
                    una opción que diga "Seleccione estado". Allí seleccionarás
                    la opción que corresponda dependiendo del estado de la
                    mascota: Si la mascota se ha perdido y te encuentras en la
                    búsqueda de la misma, la opción correcta a seleccionar es
                    "Perdido". De lo contrario, si la mascota ha sido encontrada
                    y te encuentras en la búsqueda de su familia, la opción
                    correcta a seleccionar es "Encontrado". Por último, si la
                    mascota se encuentra en adopción y quieres encontrar una
                    nueva familia que le dé todo el amor del mundo, la opción
                    correcta a seleccionar es "En adopción".
                  </li>
                  {/* <li>
                    <strong>¿Cómo publicar animales encontrados?</strong>
                    <br></br>
                    Al igual que para publicar  ello puedes hacer click en el botón "Publicar" que se encuentra en la parte superior derecha de la aplicación. Aquí, al igual que  tendrás
                    disponible un formulario donde puedes ingresar todas las
                    características, información y comentarios que creas
                    relevantes para que la familia de esa mascota pueda ubicarla
                    y reencontrarse con ella lo mas pronto posible
                  </li> */}
                  <li>
                    <strong>
                      ¿Qué pasos debo seguir para poder adoptar una mascota?
                    </strong>
                    <br></br>
                    Hay muchos animales en Salvando Patitas esperando tener una
                    familia. Si deseas adoptar a alguno de ellos, es importante
                    que puedas ponerte en contacto con la persona que hizo la
                    publicación para coordinar tu visita. En el correr de los
                    días, se estarán comunicando contigo para agendar.
                  </li>
                  <li>
                    {" "}
                    <strong>¿De qué manera puedo hacer donaciones?</strong>
                    <br></br>
                    Si deseas colaborar con Salvando Patitas pudes hacerlo a
                    través de nuestra cuenta de Mercado Pago o comunicándote con
                    nosotros por correo electrónico. Para esto último puedes
                    llenar el formulario que se encuentra en la sección{" "}
                    <a
                      href="/contacto"
                      class="link-primary text-decoration-none "
                    >
                      Contáctanos
                    </a>{" "}
                    en la parte inferior de la aplicación, y te contactaremos a
                    la brevedad.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ backgroundColor: "#ceedc783" }}
          >
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                style={{ backgroundColor: "#86C8BC", color: "#36544F" }}
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
              <div className="accordion-body" style={{ color: "#36544F" }}>
                <a
                  href="/contacto"
                  className="dropdown-item"
                  style={{ color: "#36544F" }}
                >
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
              <i
                className="fab fa-facebook m-3 fs-1"
                style={{ color: "#36544F" }}
              ></i>
            </a>

            {/* inicia sesion con twitter */}
            <a href="https://twitter.com/Patita8Salvando">
              <i
                className="fab fa-twitter m-3 fs-1"
                style={{ color: "#36544F" }}
              ></i>
            </a>

            {/* inicia sesion con instagram */}
            <a href="https://www.instagram.com/salvandopatitas28/">
              <i
                className="fab fa-instagram m-3 fs-1"
                style={{ color: "#36544F" }}
              ></i>
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
