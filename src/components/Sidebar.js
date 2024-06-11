import React from 'react';
import Search from "./Search";
import Today from "./Today";
import City from "./City";
import Description from "./Description";
import ErrorMessage from "./ErrorMessage";

const Sidebar = ({error, tempType, changeCity, city}) => {

    const content = error ? <ErrorMessage/> : <Today tempType={tempType}/>

    return (
        <div className="sidebar">
            <Search changeCity={changeCity}/>
            {content}
            <div className="sidebar__block">
                <Description/>
                <City city={city}/>
            </div>
        </div>
    );

}

export default Sidebar;