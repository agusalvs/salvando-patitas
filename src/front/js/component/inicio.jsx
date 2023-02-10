import React from "react";
// import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <div id="about">
        <img
          className="mx-auto"
          style={{ width: "100%", height: "600px" }}
          src="https://img.freepik.com/vector-premium/huella-gato-perro-cachorro-mascota-rastro_177006-39.jpg?w=2000"
          alt=""
        />

        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1
                style={{
                  marginTop: "-35%",
                  color: "#86C8BC",
                  backgroundColor: "white",
                }}
                className=" display-1 5rem  mb-4 "
              >
                <b>Salvando Patitas</b>
              </h1>
              <p
                className="display-5 3rem bg-white fs-2"
                style={{ color: "#36544F" }}
              >
                <b>buscando hacer la diferencia</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
