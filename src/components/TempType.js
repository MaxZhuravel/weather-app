import React from 'react';

const TempType = (props) => {
    return (
        <div className={props.className} onClick={props.convert}>°{props.type}</div>
    );

}

export default TempType;