import React from 'react';
import './ForcedBackdrop.css';

const Backdrop = ( props ) => {
    return (
        props.show ? <div className="ForcedBackdrop" onClick={props.onClick}>

        </div> : null
    );
}

export default Backdrop;