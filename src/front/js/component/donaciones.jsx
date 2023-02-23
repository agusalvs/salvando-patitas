import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
// import Swal from "sweetalert2";

export const Donaciones = () => {
  const { store, actions } = useContext(Context);
  const pagoMercadoPago = () => {
    console.log(store.mercadopago);
    window.location.replace(store.mercadopago.sandbox_init_point);
  };

  useEffect(() => {
    actions.pagoMercadoPago();
  }, []);

  return (
    <div className="py-4" style={{ backgroundColor: "#ceedc783" }}>
      <div className="container">
        <div className="card w-50 mx-auto my-4 ">
          <div className="card-body">
            <h5 className="card-title"> Hola </h5>{" "}
            <p className="card-text">
              {" "}
              With supporting text below as a natural lead - in to additional
              content.{" "}
            </p>{" "}
            <button className="btn btn-primary" onClick={pagoMercadoPago}>
              {" "}
              Button{" "}
            </button>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
