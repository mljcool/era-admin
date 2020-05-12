import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: '400px',
    width: 'auto',
};

const GoogleMaps = ({ selectedShopData }) => {
    const currentPosition = {
        lat: parseFloat(
            (selectedShopData.shopLocation || {}).latitude ||
                7.069250800000001
        ),
        lng: parseFloat(
            (selectedShopData.shopLocation || {}).longitude || 125.611285
        ),
    };
    return (
        <LoadScript
            id='script-loader'
            googleMapsApiKey='AIzaSyCM9feJhmKCUUsDv9zg6dQcYeAHEAHwM08'
        >
            <GoogleMap
                id='example-map'
                mapContainerStyle={mapContainerStyle}
                zoom={16}
                center={currentPosition}
            >
                <Marker
                    key={selectedShopData.id}
                    title={selectedShopData.name}
                    position={currentPosition}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMaps;
