import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "leaflet/dist/leaflet.css";

export const MapaSingle = (props) => {
  const { store, actions } = useContext(Context);
  var myIcon = L.icon({
    iconUrl:
      "https://res.cloudinary.com/de1k9ojw2/image/upload/v1677005762/Salvando%20Patitas/Salvando_Patitas_9479452d783b1ae2605a4547577e1313-removebg-preview_ygxh4j-b_rgb_86c8bc_jxhbij.png",
    iconSize: [38, 45],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: "",
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
  // let loc = [];
  useEffect(() => {
    if (store.mascota.lat != undefined || store.mascota.lat != null) {
      return;
    }
  }, [store?.mascota?.lat]);
  const position = [51.505, -0.09];
  console.log(props.position);
  // console.log(store.mascota.localizacion);

  return (
    <>
      <MapContainer
        // center={store?.mascota?.localizacion}
        center={[store?.mascota?.lat, store?.mascota?.lng]}
        zoom={7}
        scrollWheelZoom={false}
        style={{ width: "350px", height: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[store?.mascota?.lat, store?.mascota?.lng]}
          icon={myIcon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
