import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
  getCenter,
} from "react-leaflet";
import React, {
  useContext,
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import "leaflet/dist/leaflet.css";
import { marker } from "leaflet";
import { Context } from "../store/appContext.js";

export const Mapa = () => {
  const [localizacion, setLocalizacion] = useState({});
  const { store, actions } = useContext(Context);

  function enviarDatos(e, data) {
    setLocalizacion(data);
    actions.localizacion(localizacion);
    // actions.localizacion(data);
    setLocalizacion({});
    console.log(localizacion);
  }

  const [position, setPosition] = useState(null);
  function LocationMarker() {
    // var myIcon = L.icon({
    //   iconUrl:
    //     "https://res.cloudinary.com/de1k9ojw2/image/upload/v1677005762/Salvando%20Patitas/Salvando_Patitas_9479452d783b1ae2605a4547577e1313-removebg-preview_ygxh4j-b_rgb_86c8bc_jxhbij.png",
    //   iconSize: [38, 45],
    //   iconAnchor: [22, 94],
    //   popupAnchor: [-3, -76],
    //   shadowUrl: "",
    //   shadowSize: [68, 95],
    //   shadowAnchor: [22, 94],
    // });
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    const onMove = useCallback(() => {
      setPosition(map.getCenter());
    }, [map]);

    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);
    setLocalizacion(position);
    return position === null ? null : (
      <Marker
        position={position}
        // // onClick={(e) =>
        // //   setLocalizacion(position.lat.toFixed(4), position.lng.toFixed(4))
        // // }
        // style={{
        //   backgroundImage:
        //     "https://res.cloudinary.com/de1k9ojw2/image/upload/v1677005762/Salvando%20Patitas/Salvando_Patitas_9479452d783b1ae2605a4547577e1313-removebg-preview_ygxh4j-b_rgb_86c8bc_jxhbij.png",
        // }}
        // icon={myIcon}
      >
        {/* <Popup>
          <span
            onClick={() =>
              setLocalizacion({
                latitud: position.lat.toFixed(4),
                longitud: position.lng.toFixed(4),
              })
            }
          >
            {">>Enviar<<"}
          </span>{" "}
          latitude: {position.lat.toFixed(4)}, longitude:{" "}
          {position.lng.toFixed(4)}{" "}
        </Popup> */}
      </Marker>
    );
  }

  // function ultimaposi(ev) {
  //   setPosition(ev.latlng); // ev is an event object (MouseEvent in this case)
  // }

  return (
    <>
      <MapContainer
        style={{ width: "350px", height: "300px" }}
        center={[-34.3888, -55.7996]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      <button
        className="mt-3 d-flex justify-content-center"
        style={{
          borderRadius: "2rem",
          borderColor: "#86C8BC",
          borderWidth: "2px",
          backgroundColor: "#FFF6BD",
          opacity: "75%",
          fontSize: "15px",
        }}
        onClick={(e) =>
          enviarDatos(e, {
            latitud: position.lat.toFixed(4),
            longitud: position.lng.toFixed(4),
          })
        }
      >
        Confirmar ubicación
      </button>
    </>
  );
};
