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
    <div
      id="donaciones"
      className="card-body text-center py-4 px-5 mx-auto"
      style={{ backgroundColor: "#ceedc783" }}
    >
      <div className="col-md-12">
        <p
          className="display-2 5-rem fs-2"
          style={{
            // marginTop: "-49%",
            color: "#36544F",
            fontStyle: "italic",
            // backgroundColor: "#FFF6BD",
            // opacity: "50%",
          }}
        >
          <b>¡Dona a Salvando Patitas y ayudanos a ayudar!</b>
        </p>
        <p className="mb-5 fw-light" style={{ color: "#64748B" }}>
          <b>
            Haz click en el botón con forma de corazón para hacernos llegar tu
            granito de arena.
          </b>
        </p>
      </div>
      <div className="col-md-10">
        <img
          src="https://res.cloudinary.com/de1k9ojw2/image/upload/v1677524074/Salvando%20Patitas/depositphotos_24533529-stock-photo-group-of-pets-surrounding-a_2-removebg-preview_bsrthi.png"
          style={{ width: "40%", height: "40%" }}
        ></img>
        <img
          src="https://res.cloudinary.com/de1k9ojw2/image/upload/v1677250565/Salvando%20Patitas/5F173ADE-AD16-432D-8259-976932E66504_hgfria.png"
          alt=""
          type="button"
          onClick={pagoMercadoPago}
          style={{ width: "15%", height: "15%", marginLeft: "-27%" }}
        />
        {/* <button className="btn btn-primary" onClick={pagoMercadoPago}>
                {" "}
                DONAR{" "}
              </button>{" "} */}
      </div>{" "}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};
