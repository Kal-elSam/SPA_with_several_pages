"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [userLocation, setUserLocation] = useState(null);
  const profile = {
    displayName: 'Nombre de usuario',
    pictureUrl: 'https://www.w3schools.com/w3images/avatar2.png',
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation([latitude, longitude]);
    });
  }, []);

  if (!userLocation) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer style={{ height: '100vh' }} center={userLocation} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={userLocation} radius={50}>
        <Popup>
          <div>
            <img src={profile.pictureUrl} alt="User profile" />
            <p>{profile.displayName}</p>
            <p>{userLocation.join(', ')}</p>
          </div>
        </Popup>
      </Circle>
    </MapContainer>
  );
}
