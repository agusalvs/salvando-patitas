import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let id = params.id;
  useEffect(() => {
    actions.getSingleMascota(id);
  }, []);

  return (
    <>
      <div
        className="d-flex flex-column pt-5"
        style={{
          backgroundColor: "#FFD4B2",
          color: "#36544F",
        }}
      >
        <div className="d-flex justify-content-between mb-3">
          <div
            className="mt-4 mb-1 mx-5 flex-grow-1"
            style={{
              backgroundColor: "#FFF6BD",
              borderRadius: "2rem",
            }}
          >
            <h1 className="text-center m-4">{store.mascota.titulo}</h1>{" "}
          </div>{" "}
          <div
            className="my-5 mx-5 align-self-center"
            style={{
              backgroundColor: "#FFF6BD",
              borderRadius: "2rem",
            }}
          >
            <h5 className="text-center m-4">{store.mascota.estado}</h5>{" "}
          </div>{" "}
        </div>{" "}
        <div className="d-flex justify-content-between">
          <section className="d-flex flex-column">
            <div className="m-5">
              <img
                src={store.mascota.foto1}
                alt="pepito"
                className="object-fit-fill"
                style={{ width: "100%", borderRadius: "2rem" }}
              />{" "}
            </div>{" "}
            <div className="d-flex justify-content-around m-2 mx-4">
              <div
                className="px-3 m-2"
                style={{
                  backgroundColor: "#FFF6BD",
                  borderRadius: "2rem",
                }}
              >
                <h6 className="p-3"> {store.mascota.edad} </h6>{" "}
                <p className="px-4"> Edad </p>{" "}
              </div>
              <div
                className="px-3 mb-2 m-1"
                style={{
                  backgroundColor: "#FFF6BD",
                  borderRadius: "2rem",
                }}
              >
                <h6 className="p-3"> {store.mascota.tamaño} </h6>{" "}
                <p className="px-4"> Tamaño </p>{" "}
              </div>{" "}
              <div
                className="px-3 m-2"
                style={{
                  backgroundColor: "#FFF6BD",
                  borderRadius: "2rem",
                }}
              >
                <h6 className="p-3">{store.mascota.genero} </h6>{" "}
                <p className="px-4"> Genero </p>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section className="d-flex flex-column">
            <div className="d-flex flex-column justify-content-around m-5 text-center">
              <h5
                className="p-2 px-5 mb-2"
                style={{
                  backgroundColor: "#FFF6BD",
                  borderRadius: "2rem",
                }}
              >
                {store.mascota.nombre}{" "}
              </h5>{" "}
              <p
                className="p-1 mx-2 my-2"
                style={{
                  backgroundColor: "#FFF6BD",
                  borderRadius: "2rem",
                }}
              >
                {store.mascota.categoria}{" "}
              </p>{" "}
              <p
                className="p-1 mx-5 my-2"
                style={{
                  backgroundColor: "#FFF6BD",
                  borderRadius: "2rem",
                }}
              >
                {store.mascota.raza}{" "}
              </p>{" "}
            </div>{" "}
            <div
              className="p-3 mx-5 my-2"
              style={{
                backgroundColor: "#FFF6BD",
                borderRadius: "2rem",
              }}
            >
              <p> {store.mascota.descripcion} </p>{" "}
            </div>{" "}
            <div
              className="d-flex justify-content-between p-1 mx-5 my-5"
              style={{
                backgroundColor: "#FFF6BD",
                borderRadius: "2rem",
              }}
            >
              <i className="fab fa-whatsapp m-3 mx-5 fs-1 text-success"></i>
              <h2 className="m-3 mx-5"> {store.mascota.contacto} </h2>{" "}
            </div>{" "}
          </section>{" "}
          <section>
            <div className="my-5 mx-3">
              <p
                className="text-center my-1 mx-5 px-5 py-2"
                style={{
                  backgroundColor: "#FFF6BD",
                  borderRadius: "2rem",
                }}
              >
                {store.mascota.ubicacion}{" "}
              </p>{" "}
            </div>{" "}
            <div className="my-5 mx-3 object-fit-contain">
              <iframe
                width="425"
                height="350"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-63.98437500000001%2C-38.58252615935331%2C-45.63720703125%2C-30.259067203213018&amp;layer=mapnik&amp;marker=-34.52466147177172%2C-54.810791015625"
                style={{
                  borderRadius: "2rem",
                }}
              ></iframe>{" "}
              <br />
              <small>
                <a href="https://www.openstreetmap.org/?mlat=-34.525&amp;mlon=-54.811#map=7/-34.525/-54.811">
                  Ver mapa más grande{" "}
                </a>{" "}
              </small>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
