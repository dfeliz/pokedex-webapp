import React from 'react';
import { Button } from 'semantic-ui-react';
import './Profile.css';

const profile = ( props ) => (
        <div id="ProfileSegment">
            <p>
                Username: 
                <br></br> 
                <span>
                    {props.userData.user_username}  
                </span>
            </p>
            <p>
                Email: 
                <br></br> 
                <span>
                    {props.userData.user_email} 
                </span>
            </p>
            <div className="ui horizontal divider">Personal data</div>
            <p>
                Firstname: 
                <br></br> 
                <span>
                    {props.userData.user_name} 
                </span>
            </p>
            <p>Lastname: 
                <br></br> 
                <span>
                    {props.userData.user_lastname} 
                </span>
            </p>
            <p>Gender: 
                <br></br> 
                <span>
                    {props.userData.gender.gender_name} 
                </span>
            </p>
            <p>City: 
                <br></br> 
                <span>
                    {props.userData.user_city} 
                </span>
            </p>
            <br></br>
            <p>User created on: <span><br></br> {props.userData.createdAt} </span></p>
            <Button color={"blue"} onClick={props.enterEditMode}>Edit</Button>
        </div>
);

export default profile;