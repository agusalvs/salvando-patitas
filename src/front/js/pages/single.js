import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let id = params.id;
  console.log(id);
  useEffect(() => {
    actions.getSingleMascota(id);
  }, []);
  console.log(`Prueba ${store?.mascota.localizacion}`);
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
            className="mt-4 mb-1 mx-5 flex-grow-1 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#FFF6BD",
              borderRadius: "2rem",
            }}
          >
            <h1 className="text-center m-4"> {store.mascota.titulo} </h1>{" "}
          </div>{" "}
          <div
            className="my-5 mx-5 align-self-center"
            style={{
              backgroundColor: "#FFF6BD",
              borderRadius: "2rem",
            }}
          >
            <h5 className="text-center m-4"> {store.mascota.estado} </h5>{" "}
          </div>{" "}
        </div>{" "}
        <div className="d-flex justify-content-between">
          <section className="d-flex flex-column">
            <div className="m-5">
              <img
                src={store.mascota.foto1}
                alt="pepito"
                className="object-fit-fill"
                style={{
                  width: "100%",
                  borderRadius: "2rem",
                }}
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
              </div>{" "}
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
                <h6 className="p-3"> {store.mascota.genero} </h6>{" "}
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
              <i className="fab fa-whatsapp m-3 mx-5 fs-1 text-success"> </i>{" "}
              <a
                className="m-3 mx-5"
                href={`https://wa.me/598${store.mascota.contacto}`}
              >
                {" "}
                {store.mascota.contacto}{" "}
              </a>{" "}
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
                style={{ borderRadius: "0.5rem", marginTop: "1rem" }}
                width="350px"
                height="300px"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={
                  "https://maps.google.com/?q=" +
                  store?.mascota?.lat +
                  "," +
                  store?.mascota?.lng +
                  "&z=14&t=m&output=embed"
                }
              ></iframe>
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
