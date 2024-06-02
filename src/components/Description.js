import React, {useContext} from 'react';
import WeatherDataContext from "../context/WeatherDataContext";

const Description = () => {

    const context = useContext(WeatherDataContext);

    return (
        <div className="sidebar__info">
            <div className="sidebar__desc">
                <div className="sidebar__desc-icon">
                    <img src={`/icons/${context.icon}.png`} alt=""/>
                </div>
                {context.description}
            </div>
            <div className="sidebar__perc">
                <div className="sidebar__perc-icon">
                    <img src="/icons/09d.png" alt=""/>
                </div>
                Rain - 0%
            </div>
        </div>
    );
}

export default Description;