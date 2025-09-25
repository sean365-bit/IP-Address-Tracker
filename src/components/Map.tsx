import "../styles/Map.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { type LatLngExpression } from "leaflet";
import iconUrl from "../assets/images/icon-location.svg";
import { useEffect } from "react";

function RecenterMap({ position }: { position: LatLngExpression }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);
  return null;
}

const DefaultIcon = L.icon({
  iconUrl,
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  lat?: number;
  lng?: number;
}

const Map = function ({ lat, lng }: MapProps) {
  const position: LatLngExpression =
    lat && lng ? [lat, lng] : [37.4847, -122.1477];

  return (
    <MapContainer
      center={position}
      zoom={17}
      className="map"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{lat && lng ? "User Location" : "Default Location"}</Popup>
      </Marker>
      <RecenterMap position={position} />
    </MapContainer>
  );
};

export default Map;
