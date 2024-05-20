import React, {Component} from 'react';

class Highlights extends Component {
    render() {
        return (
            <div className="highlights">
                <div className="highlights__title">Today`s Highlights</div>
                <div className="highlights__body">
                    <div className="highlights__item pressure">
                        <div className="highlights__item-title">Pressure</div>
                        <div className="large-number">5</div>
                        <div className="subtitle">Normal</div>
                    </div>
                    <div className="highlights__item wind-status">
                        <div className="highlights__item-title">Wind Status</div>
                        <div className="large-number">7.70 <span className="unit-measure">km/h</span></div>
                        <div className="subtitle">
                            <img src="/icons/wind-direction.png" alt="" className="wind-icon"></img>WSW
                        </div>
                    </div>
                    <div className="highlights__item sunrise-and-sunset">
                        <div className="highlights__item-title">Sunrise & Sunset</div>
                        <div className="suntime">
                            <div className="suntime__icon">
                                <img src="/icons/027-sunrise.png" alt=""/>
                            </div>
                            <div className="suntime__time">6:35 AM</div>
                        </div>
                        <div className="suntime">
                            <div className="suntime__icon">
                                <img src="/icons/026-sunset.png" alt=""/>
                            </div>
                            <div className="suntime__time">
                                5:42 PM
                            </div>
                        </div>
                    </div>
                    <div className="highlights__item humidity">
                        <div className="highlights__item-title">Humidity</div>
                        <div className="large-number humidity__number">12 <span>%</span></div>
                        <div className="subtitle">Normal</div>
                    </div>
                    <div className="highlights__item visibility">
                        <div className="highlights__item-title">Visibility</div>
                        <div className="large-number">5.2 <span className="unit-measure">km</span></div>
                        <div className="subtitle">Average</div>
                    </div>
                    <div className="highlights__item ait-quality">
                        <div className="highlights__item-title">Air Quality</div>
                        <div className="large-number">105</div>
                        <div className="subtitle">Unhealthy</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Highlights;