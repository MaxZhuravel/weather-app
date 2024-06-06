import React from 'react';

const City = (props) => {

    const { city } = props;

    return (
        <div className="sidebar__city">
            <img src="/img/new-york.jpg" alt="city"/>
            <div className="city__name">{city}</div>
        </div>
    );
}

export default City;