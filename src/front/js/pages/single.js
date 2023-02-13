import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ backgroundColor: "#FFD4B2", color: "#36544F" }}
      >
        <div className="d-flex justify-content-between mb-3">
          <div
            className="rounded-2 mt-4 mb-1 mx-5 flex-grow-1"
            style={{ backgroundColor: "#FFF6BD" }}
          >
            {/* <h1 className="text-center m-4">{store.mascota.titulo}</h1> */}
            <h1 className="text-center my-4 mx-5 align-self-center">
              Se perdio pepito
            </h1>
          </div>
          <div
            className="rounded-2 my-5 mx-5 align-self-center"
            style={{ backgroundColor: "#FFF6BD" }}
          >
            {/* <h5 className="text-center m-4">{store.mascota.estado}</h5> */}
            <h5 className="text-center my-1 mx-5 px-5">Perdido</h5>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <section className="d-flex flex-column">
            <div className="m-5 flex-grow-1">
              <img
                className="rounded-3"
                src="https://i.pinimg.com/originals/28/6a/27/286a2752a4c5c2988397e291dcb2d1a8.jpg"
                alt="pepito"
              />
              {/* <img src={store.mascota.foto1} alt="pepito" /> */}
            </div>
            <div className="d-flex justify-content-around m-3">
              <p
                className="rounded-3 p-4"
                style={{ backgroundColor: "#FFF6BD" }}
              >
                - 1 año
                {/* {store.mascota.edad} */}
              </p>
              <p
                className="rounded-3 p-4"
                style={{ backgroundColor: "#FFF6BD" }}
              >
                Grande
                {/* {store.mascota.tamaño} */}
              </p>
              <p
                className="rounded-3 p-4"
                style={{ backgroundColor: "#FFF6BD" }}
              >
                Hembra
                {/* {store.mascota.genero} */}
              </p>
            </div>
          </section>
          <section className="d-flex flex-column">
            <div className="d-flex flex-column justify-content-around m-5 text-center">
              <p
                className="rounded-3 p-2 px-5 mb-2"
                style={{ backgroundColor: "#FFF6BD" }}
              >
                Pepito alias "Pepe Grillo"
                {/* {store.mascota.nombre} */}
              </p>
              <p
                className="rounded-3 p-1 mx-2 my-2"
                style={{ backgroundColor: "#FFF6BD" }}
              >
                Insecto
                {/* {store.mascota.categoria} */}
              </p>
              <p
                className="rounded-3 p-1 mx-5 my-2"
                style={{ backgroundColor: "#FFF6BD" }}
              >
                Aria
                {/* {store.mascota.raza} */}
              </p>
            </div>
            <div
              className="rounded-3 p-3 mx-5 my-2"
              style={{ backgroundColor: "#FFF6BD" }}
            >
              <p>
                Descripcion Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consequuntur corrupti porro quaerat quas facere sunt
                doloremque cumque suscipit necessitatibus. Commodi dolores
                excepturi consequatur vel ipsum, dolorum assumenda impedit
                facere blanditiis.
              </p>
            </div>
            <div
              className="d-flex justify-content-between rounded-3 p-1 mx-5 my-5"
              style={{ backgroundColor: "#FFF6BD" }}
            >
              <i className="fab fa-github m-3 mx-5 fs-1 text-muted"></i>
              <h2 className="m-3 mx-5">Contacto</h2>
            </div>
          </section>
          <section>
            <div className="my-5 mx-3">
              <p
                className="rounded-3 text-center my-1 mx-5 px-5 py-2"
                style={{ backgroundColor: "#FFF6BD" }}
              >
                Maldonado, Uruguay
                {/* {store.mascota.ubicacion} */}
              </p>
            </div>
            <div className="my-5 mx-3 object-fit-contain">
              <img
                className="rounded-3 w-100  my-1 px-5 py-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/1200px-Google_Maps_icon_%282015-2020%29.svg.png"
                alt="pepito"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
