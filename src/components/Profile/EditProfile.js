import React from 'react';
import {Button, Input, Form, Select} from 'semantic-ui-react';
import './EditProfile.css';

const editProfile = ( props ) => (
    <div>
        <Form id="ProfileSegment" onSubmit={props.onUpdate}>
            <div className="editProfileLabel">
                Username: 
                <br></br> 
                <span>
                    {props.userData.user_username}  
                </span>
            </div>
            <div className="editProfileLabel">
                Email: 
                <br></br> 
                <span>
                    {props.userData.user_email} 
                </span>
            </div>
            <div className="ui horizontal divider">Personal data</div>
            <div className="editProfileLabel">
                Firstname: 
                <Form.Field 
                    width={"5"} 
                    control={Input}
                    value={props.userData.user_name}
                    onChange={(e) => props.handleTextChange(e, "user_name")}
                    required
                />
            </div>
            <div className="editProfileLabel">
                Lastname: 
                <Form.Field 
                    width={"5"} 
                    control={Input}
                    value={props.userData.user_lastname}
                    onChange={(e) => props.handleTextChange(e, "user_lastname")}
                    required
                />
            </div>
            <div className="editProfileLabel">
                Gender: 
                <Form.Field 
                    width={"5"} 
                    control={Select}
                    options={props.genderOptions}
                    onChange={props.onGenderChange}
                    required
                />
            </div>
            <div className="editProfileLabel">
                City: 
                <Form.Field 
                    width={"5"} 
                    control={Input}
                    value={props.userData.user_city}
                    onChange={(e) => props.handleTextChange(e, "user_city")}
                    required
                />
            </div>
            <br></br>
            {
                props.loading ? <Button disabled loading color={"green"}>Save</Button> : <Button color={"green"}>Save</Button>
            }
            <Button color={"red"} onClick={props.cancelEditMode}>Cancel</Button>
        </Form>
    </div>
);

export default editProfile;