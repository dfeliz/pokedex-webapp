import React from 'react';
import { Button } from 'semantic-ui-react';

const confirmDelete = ( props ) => (
    <div>
        <h1>Delete {props.item}</h1>
        <div className="ui divider"/>
        <p>Do you REALLY want to delete your {props.item}?</p>
        <span style={{color: 'red'}}>You will lose this {props.item} FOREVER.</span>
        <br></br>
        <br></br>
        <Button color={"red"} onClick={props.confirm}>Delete this pokemon!</Button>
        <Button color={"blue"} onClick={props.cancel}>Not really</Button>
    </div>
);

export default confirmDelete;