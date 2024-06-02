import React from 'react';
import Search from "./Search";
import Today from "./Today";
import City from "./City";
import Description from "./Description";
import ErrorMessage from "./ErrorMessage";

const Sidebar = (props) => {

    let content = props.error ? <ErrorMessage/> : <Today tempType={props.tempType}/>

    return (
        <div className="sidebar">
            <Search changeCity={props.changeCity}/>
            {content}
            <Description/>
            <City city={props.city}/>
        </div>
    );

}

export default Sidebar;