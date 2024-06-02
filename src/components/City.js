import React from 'react';

const City = (props) => {
    return (
        <div className="sidebar__city">
            <img src="/img/new-york.jpg" alt="city"/>
            <div className="city__name">{props.city}</div>
        </div>
    );
}

export default City;