import React, { useState } from "react";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext.js";

export const Mascotas = (props) => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      {/* <div className="card" style={{ width: "18rem" }}>
        <img src={props.foto1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}

      <div
        className="card mb-3"
        style={{
          width: "18rem",
          backgroundColor: "#CEEDC7",
          borderRadius: "1rem",
        }}
      >
        <div className="card-header bg-transparent text-center">
          {props.titulo}
        </div>
        {/* <div className="card-body"> */}
        {/* <h5 className="card-title">Success card title</h5> */}
        <img src={props.foto1} className="card-img-top" alt="..." />
        {/* </div> */}
        <div className="card-footer bg-transparent justify-content-center">
          <p className="card-text">{props.descripcion}</p>
          {/* <a href="/perdidos" className="btn btn-light">
            Más información
          </a> */}
        </div>
      </div>
    </>
    // <div
    //   className="container-fluid p-5"
    //   id="perdidos"
    //   style={{ backgroundColor: "#FFF6BD" }}
    // >
    //   <h1>Perdidos</h1>
    //   <p>
    //     Donec ullancorper nulla non metus auctur frangilla. Bestibulum id ligula
    //     porta felis euismod semper. Praesent commodo cursus magna, vel
    //     scelerisque nisl consecutor. Fusque dabisus , tellus ac cursus commodo.
    //   </p>
    //   <div className="row">
    //     <div className="col-4">
    //       <div className="card" style={{ width: "25rem" }}>
    //         <img
    //           src="https://cdn.pixabay.com/photo/2020/01/18/09/05/network-4774766__340.jpg"
    //           className="card-img-top"
    //           alt="..."
    //         />
    //         <div className="card-body">
    //           <h5 className="card-title" style={{ color: "rgb(56, 120, 146)" }}>
    //             Project Name
    //           </h5>
    //           <p className=" card-text">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
    //             harum debitis, iusto non pariatur, culpa quae corporis eius enim
    //             eaque tempora fugiat ratione cupiditate minima sint! At illum
    //             amet corporis.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-4">
    //       <div className="card" style={{ width: "25rem" }}>
    //         <img
    //           src="https://cdn.pixabay.com/photo/2020/01/18/09/05/network-4774766__340.jpg"
    //           className="card-img-top"
    //           alt="..."
    //         />
    //         <div className="card-body">
    //           <h5 className="card-title" style={{ color: "rgb(56, 120, 146)" }}>
    //             Project Name
    //           </h5>
    //           <p className="card-text">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
    //             harum debitis, iusto non pariatur, culpa quae corporis eius enim
    //             eaque tempora fugiat ratione cupiditate minima sint! At illum
    //             amet corporis.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-4">
    //       <div className="card" style={{ width: "25rem" }}>
    //         <img
    //           src="https://cdn.pixabay.com/photo/2020/01/18/09/05/network-4774766__340.jpg"
    //           className="card-img-top"
    //           alt="..."
    //         />
    //         <div className="card-body">
    //           <h5 className="card-title" style={{ color: "rgb(56, 120, 146)" }}>
    //             Project Name
    //           </h5>
    //           <p className="card-text">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
    //             harum debitis, iusto non pariatur, culpa quae corporis eius enim
    //             eaque tempora fugiat ratione cupiditate minima sint! At illum
    //             amet corporis.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
