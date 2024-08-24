import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import collegebuildings from "@/data/collegebuildings.json";
import { LatLngTuple } from "leaflet";

export const FacilitiesPage = () => {
  const position: LatLngTuple = [6.672499430271064, -1.56747404414109];
  return (
    <section className="p-1 border border-gray-500 rounded-sm">
      <MapContainer
        className="min-h-dvh"
        center={position}
        zoom={17}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={collegebuildings as never}
          style={() => ({
            color: "#ec4f4a",
            weight: 2,
            fillOpacity: 0.5,
          })}
          onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.name) {
              const name = feature.properties.name;
              const floors = feature.properties.floors;
              layer.bindPopup(`
                <strong>${name}</strong><br/>
                 <strong> Floors: ${floors}</strong>
              `);
            }
          }}
        />
      </MapContainer>
    </section>
  );
};
