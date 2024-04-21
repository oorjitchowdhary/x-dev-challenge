import React from "react";
import { Circle, MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import latlngs from "../utils/latlngs";
import woeids from "../utils/woeid";

const handleCircleClick = async (city, latlng) => {
    console.log(city, latlng);
    console.log(woeids[city]);

    await fetch(`http://localhost:5000/api/trends?query=${woeids[city]}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}

const getCircles = () => {
    return Object.entries(latlngs).map(([city, latlng]) => {
        return <Circle key={city} center={latlng} pathOptions={{ color: 'red' }} radius={100000} eventHandlers={{ click: () => handleCircleClick(city, latlng) }} />;
    });
};

const MapClick = ({ onClick }) => {
    useMapEvent("click", (e) => {
        console.log(e);
        onClick(e.latlng);
    });

    return null;
};

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
            {getCircles()}
        </MapContainer>
    );
};

export default Map;