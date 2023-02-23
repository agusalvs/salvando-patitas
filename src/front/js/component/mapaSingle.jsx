import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

export const MapaSingle = (props) => {
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

  const position = [51.505, -0.09];

  return (
    <>
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        style={{ width: "350px", height: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
