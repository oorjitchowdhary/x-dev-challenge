import React from "react";
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import latlngs from "../utils/latlngs";
import woeids from "../utils/woeid";
import { useTrends } from "../contexts/trendsContext";

const Map = () => {
    const { fetchTrends } = useTrends();
    return (
        <MapContainer center={[37.8, -96]} zoom={4} style={{ height: "50vh", width: "100vh", cursor: 'pointer', margin: '0 auto' }} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {Object.entries(latlngs).map(([city, latlng]) => {
                return <Circle
                    key={city}
                    center={latlng}
                    pathOptions={{ color: 'red' }}
                    radius={100000}
                    eventHandlers={{ click: async () => {
                        console.log("Clicked near", city, "with latlng", latlng, "and woeid", woeids[city]);
                        await fetchTrends(woeids[city]);
                    }}}
                />;
            })}
        </MapContainer>
    );
};

export default Map;