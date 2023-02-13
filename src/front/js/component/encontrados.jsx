import React from "react";
// import { Link } from "react-router-dom";

export const Encontrados = () => {
  return (
    <div
      className="container-fluid p-5"
      id="encontrados"
      style={{ backgroundColor: "#FFD4B2" }}
    >
      <h1>Encontrados</h1>
      <p>
        Donec ullancorper nulla non metus auctur frangilla. Bestibulum id ligula
        porta felis euismod semper. Praesent commodo cursus magna, vel
        scelerisque nisl consecutor. Fusque dabisus , tellus ac cursus commodo.
      </p>
      <div className="row">
        <div className="col-4">
          <div className="card" style={{ width: "25rem" }}>
            <img
              src="https://cdn.pixabay.com/photo/2020/01/18/09/05/network-4774766__340.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "rgb(56, 120, 146)" }}>
                Project Name
              </h5>
              <p className=" card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                harum debitis, iusto non pariatur, culpa quae corporis eius enim
                eaque tempora fugiat ratione cupiditate minima sint! At illum
                amet corporis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "25rem" }}>
            <img
              src="https://cdn.pixabay.com/photo/2020/01/18/09/05/network-4774766__340.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "rgb(56, 120, 146)" }}>
                Project Name
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                harum debitis, iusto non pariatur, culpa quae corporis eius enim
                eaque tempora fugiat ratione cupiditate minima sint! At illum
                amet corporis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "25rem" }}>
            <img
              src="https://cdn.pixabay.com/photo/2020/01/18/09/05/network-4774766__340.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "rgb(56, 120, 146)" }}>
                Project Name
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                harum debitis, iusto non pariatur, culpa quae corporis eius enim
                eaque tempora fugiat ratione cupiditate minima sint! At illum
                amet corporis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
