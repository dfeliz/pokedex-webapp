import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const myGoogleMap = ( props ) => (
    <GoogleMap 
        defaultZoom={13}
        defaultCenter={{ lat: props.mapCoordX, lng: props.mapCoordY }}
        onClick={(e) => props.onClick(e)}
    >
    <Marker position={{ lat: props.mapCoordX, lng: props.mapCoordY }} />
    </GoogleMap>
);

export default withScriptjs(withGoogleMap(myGoogleMap));