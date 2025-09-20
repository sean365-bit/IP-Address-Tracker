import "../styles/Map.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = function () {
  return (
    <MapContainer
      center={[13.7, -89.2]} // San Salvador
      zoom={18}
      className="map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[13.7, -89.2]}>
        <Popup>Hello from El Salvador!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
