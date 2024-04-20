import React from "react";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";

const MapClick = ({ onClick }) => {
    useMapEvent("click", (e) => {
        onClick(e.latlng);
    });

    return null;
}

const Map = () => {
    const handleClick = (latlng) => {
        console.log(latlng);
    };

    return (
        <MapContainer center={[37.8, -96]} zoom={4} style={{ height: "50vh", width: "100vh", cursor: 'pointer' }} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick onClick={handleClick} />
        </MapContainer>
    );
};

export default Map;