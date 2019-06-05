import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const myGoogleMap = ( props ) => (
    <GoogleMap 
        defaultZoom={13}
        defaultCenter={{ lat: 18.45677765242441, lng: -69.96347798782966 }}
        onClick={(e) => props.onClick(e)}
    >
    <Marker position={{ lat: props.mapCoordX, lng: props.mapCoordY }} />
    </GoogleMap>
);

export default withScriptjs(withGoogleMap(myGoogleMap));