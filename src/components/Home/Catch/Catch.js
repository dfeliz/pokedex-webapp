import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {Form, Button, Select} from 'semantic-ui-react';
import MyGoogleMap from '../GoogleMap/MyGoogleMap';
import {DatePicker} from '../../UI/DatePicker/DatePicker';
import './Catch.css';

const Catch = ( props ) => (
    <Aux>
        <h2>Catch a pokemon</h2>
        <div className="ui divider" />
        <Form onSubmit={props.onSubmit}>
            <Form.Field
                label="Captured pokemon"
                control={Select} //TODO: Use a select with search
                options={props.pokemons}
                placeholder="Select a pokemon"
                onChange={props.onSelectChange}
                required
            />
            <label className="FieldHeader">Location</label>
            <MyGoogleMap 
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCn0rnxFruFEPQRu7uenBmJX7xTt6vD4tw&libraries=geometry,drawing,places"
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
    </Aux>
);

export default Catch;