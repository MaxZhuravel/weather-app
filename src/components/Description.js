import React, {Component} from 'react';
import WeatherDataContext from "../context/WeatherDataContext";

class Description extends Component {

    static contextType = WeatherDataContext;

    render() {
        return (
            <div className="sidebar__info">
                <div className="sidebar__desc">
                    <div className="sidebar__desc-icon">
                        <img src="/icons/005-clouds.png" alt=""/>
                    </div>
                    {this.context.description}
                </div>
                <div className="sidebar__perc">
                    <div className="sidebar__perc-icon">
                        <img src="/icons/006-rainy.png" alt=""/>
                    </div>
                    Rain - 30%
                </div>
            </div>
        );
    }
}

export default Description;