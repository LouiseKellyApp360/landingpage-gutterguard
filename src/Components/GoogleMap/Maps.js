import React, {useEffect, useRef, useState} from 'react';
import {Circle, Marker, GoogleMap, useLoadScript} from '@react-google-maps/api';

const Maps = ({userData: {mapCenter, circleCenter, makerCenter, circleRadius}}) => {
    const mapRef = useRef();
    const circleRef = useRef();
    const [centerCircle, setCenterCircle] = useState({} || {lat: 100, lng: 100});
    const [centerMap, setCenterMap] = useState({} || {lat: 100, lng: 100});
    const [centerMaker, setCenterMaker] = useState({} || {lat: 100, lng: 100});
    const [radiusCircle, setRadiusCircle] = useState(0);

    useEffect(() => {
        mapCenter && (setCenterMap({lat: parseFloat(mapCenter.lat), lng: parseFloat(mapCenter.lng)}))
        circleCenter && (setCenterCircle({lat: parseFloat(circleCenter.lat), lng: parseFloat(circleCenter.lng)}))
        makerCenter && (setCenterMaker({lat: parseFloat(makerCenter.lat), lng: parseFloat(makerCenter.lng)}))
        circleRadius && (setRadiusCircle(parseFloat(circleRadius)));
    },[mapCenter, circleCenter, makerCenter, circleRadius])
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCKUFsyljd91YonyWZiaF4f92R7pcvWUkA'
    });
    const loadHandler = (map) => {
        mapRef.current = map;

    };
    return (
        <>{isLoaded &&
            <GoogleMap
                onLoad={loadHandler}
                center={centerMap}
                zoom={window.screen.width > 1440 ? 8.5 : window.screen.width > 1024 ? 6.5 : 6}
                mapContainerStyle={{
                    height: "100%",
                    width: "100%"
                }}
            >
                <Marker position={centerMaker}/>
                <Circle
                    ref={circleRef}
                    center={centerCircle}
                    radius={radiusCircle}
                    options={{fillColor: "transparent", strokeColor: "black", strokeWeight: 1}}
                />
            </GoogleMap>}
        </>
    )
};

export default Maps;