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
      className="py-4"
      style={{ backgroundColor: "#ceedc783" }}
    >
      <div className="container">
        {/* <div className="card w-50 mx-auto my-4 "> */}
        <div className="card-body">
          <h5 className="card-title"> Hola </h5>{" "}
          <p className="card-text">
            {" "}
            With supporting text below as a natural lead - in to additional
            content.{" "}
          </p>{" "}
          <img
            src="https://st.depositphotos.com/1594920/2453/i/600/depositphotos_24533529-stock-photo-group-of-pets-surrounding-a.jpg"
            style={{ width: "50%", height: "50%" }}
          ></img>
          <img
            src="https://res.cloudinary.com/de1k9ojw2/image/upload/v1677246353/Salvando%20Patitas/Salvando_Patitas_9479452d783b1ae2605a4547577e1313-removebg-preview_ygxh4j-b_rgb_86c8bc_qdytiv.png"
            alt=""
            type="button"
            onClick={pagoMercadoPago}
            style={{ width: "20%", height: "20%", marginLeft: "-34%" }}
          />
          {/* <button className="btn btn-primary" onClick={pagoMercadoPago}>
              {" "}
              DONAR{" "}
            </button>{" "} */}
        </div>{" "}
        {/* </div> */}
      </div>
    </div>
  );
};
