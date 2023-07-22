import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";

const position = [51.11, -0.09];

export const LeafletMaps = () => {
  return (
    <div className="container">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
