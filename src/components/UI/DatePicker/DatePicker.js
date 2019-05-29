import React from 'react';
import './DatePicker.css';

const DatePicker = ( props ) => (
    <div className="DatePicker">
        <label>{props.label}{props.required ? <span style={{color: 'red'}}> *</span> : null}</label>
        <input 
            type="date"
            {...props}
            />
    </div>
);

export {DatePicker}