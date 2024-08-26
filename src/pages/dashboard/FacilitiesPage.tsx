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
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* KNUST TMS Tile Layer */}
        <TileLayer
          url="https://knust-tms.intdeltas.com/tms/{z}/{x}/{y}.png"
          tms={true}
          opacity={1}
          attribution="Geomatic Eng., KNUST, 2024"
          minZoom={2}
          maxZoom={22}
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
              const {
                name,
                floors,
                condition,
                purpose,
                solar_p,
                hvac_sys,
                light_sys,
                ac,
                bulbs,
                projectors,
                tables,
                chairs,
                rooms,
                fans,
              } = feature.properties;

              layer.bindPopup(`
        <strong>${name}</strong><br/>
        <strong>Floors:</strong> ${floors}<br/>
        <strong>Condition:</strong> ${condition}<br/>
        <strong>Purpose:</strong> ${purpose}<br/>
        <strong>Solar Panels:</strong> ${solar_p}<br/>
        <strong>HVAC System:</strong> ${hvac_sys}<br/>
        <strong>Lighting System:</strong> ${light_sys}<br/>
        <strong>AC Units:</strong> ${ac}<br/>
        <strong>Bulbs:</strong> ${bulbs}<br/>
        <strong>Projectors:</strong> ${projectors}<br/>
        <strong>Tables:</strong> ${tables}<br/>
        <strong>Chairs:</strong> ${chairs}<br/>
        <strong>Rooms:</strong> ${rooms}<br/>
        <strong>Fans:</strong> ${fans}
      `);
            }
          }}
        />
      </MapContainer>
    </section>
  );
};
