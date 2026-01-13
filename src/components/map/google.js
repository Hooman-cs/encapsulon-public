"use client";

import { useState, useCallback } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "../../components/Aboutnav/contactsoft.css";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 40.7939,  // Latitude of 25 Melville Park Rd
  lng: -73.4155, // Longitude of 25 Melville Park Rd
};

export default function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCuro_Das6SA4HRZzGnqR6VHHgyfprryCg", // Replace with your actual key
  });

  const [marker, setMarker] = useState(defaultCenter);

  const handleMapClick = useCallback((event) => {
    if (!event.latLng) return;
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarker(newLocation);
  }, []);

  if (loadError) return <div>❌ Error loading maps</div>;
  if (!isLoaded) return <div>⏳ Loading maps...</div>;

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={marker}
        onClick={handleMapClick}
      >
        <Marker position={marker} />
      </GoogleMap>
    </div>
  );
}
