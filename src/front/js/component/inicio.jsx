import React from "react";
// import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <div id="about" className="py-4" style={{ backgroundColor: "#ceedc783" }}>
        <img
          className="mx-auto mt-5"
          style={{ width: "100%" }}
          src="https://res.cloudinary.com/de1k9ojw2/image/upload/v1676992731/Salvando%20Patitas/ley-bienestar-animal-mascotas-removebg_j3hsuo.png"
          alt=""
        />

        <div className="container h-100">
          <div className="row h-100 text-center d-flex align-items-center justify-content-center">
            <div className="col-12 text-center">
              <h1
                className="display-2 5-rem  mb-4"
                style={{
                  marginTop: "-49%",
                  color: "#36544F",
                  fontStyle: "italic",
                  // backgroundColor: "#FFF6BD",
                  // opacity: "50%",
                }}
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
              <b>Buscando hacer la diferencia.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
