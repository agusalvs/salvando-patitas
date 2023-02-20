import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
export const Mapa = () => {
  return (
    <MapContainer
      style={{ width: "350px", height: "300px" }}
      center={[-32.490746536247535, -56.03974066415221]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.450349, -55.843973]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
