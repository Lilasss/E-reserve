import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = ({ position }) => {
    const zoomLevel = 25;

    return (
        <MapContainer
            center={position}
            zoom={zoomLevel}
            style={{ height: "400px", width: "100%" }}
            key={position.join(',')} // Utilisation de la clé pour forcer le re-render
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
                position={position}
                icon={L.icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41]
                })}
            >
                <Popup>
                    Lieu de l'événement<br />Latitude: {position[0]}<br />Longitude: {position[1]}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
