import React, { useState } from "react";
// import { Link } from "react-router-dom";

export const Pets = (props) => {
  return (
    <>
      <div
        className="card container mb-3 py-2"
        style={{
          width: "15rem",
          height: "21rem",
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          borderWidth: "4px",
          borderRadius: "1rem",
          color: "#36544F",
        }}
      >
        <div className="card-header bg-transparent text-center">
          {props.titulo}
        </div>
        <div className="card-body d-flex align-items-center">
          {/* <h5 className="card-title">Success card title</h5> */}
          <img
            src={props.foto1}
            className="card-img object-fit-fill"
            alt="..."
          />
        </div>
        <div className="card-footer bg-transparent justify-content-center">
          <p className="card-text text-truncate">{props.descripcion}</p>
          <a
            href={"/mascotas/" + props.id}
            className="btn btn-light"
            style={{
              color: "white",
              backgroundColor: "#36544F",
              opacity: "25%",
            }}
          >
            Más información
          </a>
        </div>
      </div>
    </>
  );
};
