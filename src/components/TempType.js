import React from 'react';

const TempType = ({className, convert, type}) => {

    return (
        <div className={className} onClick={convert}>°{type}</div>
    );

}

export default TempType;