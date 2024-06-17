import React from 'react';
import Search from "./Search";
import Today from "./Today";
import City from "./City";
import Description from "./Description";
import ErrorMessage from "./ErrorMessage";

const Sidebar = ({error, tempType, changeCity, city}) => {

    return (
        <div className="sidebar">
            <Search changeCity={changeCity}/>
            {error
                ? <ErrorMessage/>
                : <Today tempType={tempType}/>}
            <div className="sidebar__block">
                <Description/>
                <City city={city}/>
            </div>
        </div>
    );

}

export default Sidebar;