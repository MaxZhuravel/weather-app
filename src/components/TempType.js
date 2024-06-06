import React from 'react';

const TempType = (props) => {

    const {className, convert, type} = props

    return (
        <div className={className} onClick={convert}>°{type}</div>
    );

}

export default TempType;