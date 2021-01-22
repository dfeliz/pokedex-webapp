import React from 'react';
import {Form, Button, Select} from 'semantic-ui-react';
import MyGoogleMap from '../GoogleMap/MyGoogleMap';
import {DatePicker} from '../../UI/DatePicker/DatePicker';
import './Catch.css';

const Catch = ( props ) => (
    <>
        <h2>Catch a pokemon</h2>
        <div className="ui divider" />
        <Form onSubmit={props.onSubmit}>
            <Form.Field
                label="Captured pokemon"
                control={Select}
                search
                options={props.pokemons}
                placeholder="Select a pokemon"
                onChange={props.onSelectChange}
                required
            />
            <label className="FieldHeader">Location</label>
            <MyGoogleMap 
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GOOGLEAPIKEY}&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                onClick={(e) => props.onClick(e)}
                mapCoordX={props.mapCoordX}
                mapCoordY={props.mapCoordY}
            />
            <DatePicker
                label="Capture date"
                onChange={(e) => props.onTextChange(e, "catchdate")}
                required
            />
            {
                props.loading ? <Button disabled loading fluid color="blue" style={{marginTop: '10px'}}>Submit</Button> : <Button fluid color="blue" style={{marginTop: '10px'}}>Submit</Button>
            }
        </Form>
    </>
);

export default Catch;