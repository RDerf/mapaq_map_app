import React, { useState, useEffect } from "react";
import { MapContainer, useMap, GeoJSON } from "react-leaflet";
import Resto from "./../data/RestoMapaq.json";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "mapbox-gl-leaflet";
import mapboxgl from "mapbox-gl";

// Helper to add Mapbox GL
function MapboxLayer() {
  const map = useMap();

  React.useEffect(() => {
    const layer = L.mapboxGL({
      accessToken: process.env.REACT_APP_MAPBOXKEY,
      style: "mapbox://styles/fredrouleau/cmfe6dk5y00i401rwecxra5us",
    }).addTo(map);

    return () => {
      map.removeLayer(layer);
    };
  }, [map]);

  return null;
}

function MyMap() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Resto); // load local JSON
  }, []);

  const restoDataOptions = {
    radius: 3,
    fillColor: "#FF0000",
    color: "#FFFFFF",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };

  // Render as points
  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, restoDataOptions);
  };

  return (
    <div>
      <MapContainer
        style={{ height: "80vh" }}
        zoom={5}
        center={[46, -76]}
        scrollWheelZoom={true}
      >
        <MapboxLayer />
        {data && <GeoJSON data={data} pointToLayer={pointToLayer} />}
      </MapContainer>
    </div>
  );
}

export default MyMap;
