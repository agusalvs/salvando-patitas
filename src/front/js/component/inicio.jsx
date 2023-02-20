import React from "react";
// import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <div id="about" className="my-4">
        <img
          className="mx-auto mt-5"
          style={{ width: "100%" }}
          src="https://static1.elcomercio.es/www/multimedia/202302/10/media/ley-bienestar-animal-mascotas.jpg"
          alt=""
        />

        <div className="container h-100">
          <div className="row h-100 text-center d-flex align-items-center justify-content-center">
            <div className="col-12 text-center">
              <h1
                style={{
                  marginTop: "-48%",
                  color: "#86C8BC",
                  // backgroundColor: "#FFF6BD",
                  // opacity: "50%",
                }}
                className=" display-1 5rem  mb-4 "
              >
                <b>Salvando Patitas</b>
              </h1>
            </div>
            <p
              className="display-5 3rem fs-2"
              style={{
                color: "#36544F",
                // marginTop: "-8%",
                backgroundColor: "white",
                opacity: "75%",
              }}
            >
              <b>buscando hacer la diferencia</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
