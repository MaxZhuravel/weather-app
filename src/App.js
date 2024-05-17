import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="board">
                <div className="sidebar">
                    <div className="sidebar__search">
                        <input type="text" className="search" placeholder="Search for places..."/>
                    </div>
                    <div className="today">
                        <div className="today__image">
                            <img src="/icons/001-sun.png" alt=" "/>
                        </div>
                        <div className="today__temp">12<span>°C</span></div>
                        <div className="today__name">Monday, <span>16:00</span></div>
                    </div>

                    <div className="sidebar__info">
                        <div className="sidebar__desc">
                            <div className="sidebar__desc-icon">
                                <img src="/icons/005-clouds.png" alt=""/>
                            </div>
                            Mostly Cloudy
                        </div>
                        <div className="sidebar__perc">
                            <div className="sidebar__perc-icon">
                                <img src="/icons/006-rainy.png" alt=""/>
                            </div>
                            Rain - 30%
                        </div>
                    </div>

                    <div className="sidebar__city">
                        <img src="/img/new-york.jpg" alt="city"/>
                    </div>
                </div>

                <div className="main">
                    <div className="week">
                        <div className="week__header">
                            <div className="week__title">Week</div>
                            <div className="week__temp-type">
                                <div className="celsius active">°C</div>
                                <div className="fahrenheit">°F</div>
                            </div>
                        </div>
                        <div className="week__body">
                            <div className="day">
                                <div className="day__name">Sun</div>
                                <div className="day__img">
                                    <img src="/icons/001-sun.png" alt=""/>
                                </div>
                                <div className="day__temp">15</div>
                            </div>
                            <div className="day">
                                <div className="day__name">Mon</div>
                                <div className="day__img">
                                    <img src="/icons/016-cloud-lightning.png" alt=""/>
                                </div>
                                <div className="day__temp">12</div>
                            </div>
                            <div className="day">
                                <div className="day__name">Tue</div>
                                <div className="day__img">
                                    <img src="/icons/024-hail.png" alt=""/>
                                </div>
                                <div className="day__temp">9</div>
                            </div>
                            <div className="day">
                                <div className="day__name">Wed</div>
                                <div className="day__img">
                                    <img src="/icons/002-cloudy.png" alt=""/>
                                </div>
                                <div className="day__temp">8</div>
                            </div>
                            <div className="day">
                                <div className="day__name">Thu</div>
                                <div className="day__img">
                                    <img src="/icons/001-sun.png" alt=""/>
                                </div>
                                <div className="day__temp">5</div>
                            </div>
                            <div className="day">
                                <div className="day__name">Fri</div>
                                <div className="day__img">
                                    <img src="/icons/004-cloud.png" alt=""/>
                                </div>
                                <div className="day__temp">4</div>
                            </div>
                            <div className="day">
                                <div className="day__name">Sat</div>
                                <div className="day__img">
                                    <img src="/icons/003-cloudy-1.png" alt=""/>
                                </div>
                                <div className="day__temp">3</div>
                            </div>
                        </div>
                    </div>

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
                </div>
            </div>
        </div>
    );
}

export default App;
