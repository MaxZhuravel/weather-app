import React, {useContext} from 'react';
import HighlightsItem from "./HighlightsItem";
import WeatherDataContext from "../context/WeatherDataContext";

const Highlights = () => {

    const {weatherDailyData} = useContext(WeatherDataContext);

    const renderHighlightsItems = () => {
        let items = null;
        if (weatherDailyData.id) {
            items = weatherDailyData.highlights.map((item, i) => {
                const subtitle = getSubtitle(item.value, i);
                return <HighlightsItem
                    key={item.title}
                    title={item.title}
                    isValue={true}
                    value={getValue(item.title, item.value)}
                    subtitle={subtitle}
                    unitMeasure={getUnitMeasure(item.title)}/>
            });
        }
        return items;
    }

    const getSubtitle = (value, i) => {
        const subtitleList = {
            0: getPressure(value),
            1: getWindDirection(value[1]),
            2: null,
            3: getHumidity(value),
            4: getVisibility(value),
            5: getClouds(value)
        }
        return subtitleList[i];
    }

    const getPressure = (value) => {
        if (value < 40) return "Low";
        if (value > 70) return "High";
        else return "Normal";
    }

    const getWindDirection = (value) => {
        const directions = [
            'N',
            'NNE',
            'NE',
            'ENE',
            'E',
            'ESE',
            'SE',
            'SSE',
            'S',
            'SSW',
            'SW',
            'WSW',
            'W',
            'WNW',
            'NW',
            'NNW',
        ];

        let degrees = (value * 16) / 360;
        degrees = Math.round(degrees);
        degrees = (degrees + 16) % 16;

        return directions[degrees];
    };

    const getHumidity = (value) => {
        if (value < 40) return "Low";
        if (value > 70) return "High";
        else return "Normal";
    }

    const getVisibility = (value) => {
        if (value < 5) return "Low";
        if (value > 5 && value < 8) return "Average";
        else return "High";
    }

    const getClouds = (value) => {
        if (value < 10) return "Clear";
        if (value > 10 && value <= 40) return "Mostly Clear";
        if (value > 40 && value <= 70) return "Partly Cloudy";
        if (value > 70 && value <= 90) return "Cloudy";
        else return "Overcast Clouds"
    }

    const getValue = (title, source) => {
        if (title === 'Sunrise & Sunset') {
            const sunriseDate = new Date(source[0] * 1000);
            const sunsetDate = new Date(source[1] * 1000);
            const sunriseTime = sunriseDate.getHours() + ':' + sunriseDate.getMinutes()
            const sunsetTime = sunsetDate.getHours() + ':' + sunsetDate.getMinutes()
            return [
                {imgSrc: '/icons/027-sunrise.png', time: sunriseTime},
                {imgSrc: '/icons/026-sunset.png', time: sunsetTime}
            ];
        } else if (title === 'Wind Status') {
            return source[0];
        } else return source;
    }

    const getUnitMeasure = (item) => {
        const units = {
            'Pressure': ' gPa',
            'Wind Status': ' km/h',
            'Humidity': ' %',
            'Visibility': ' km',
            'Clouds': ' %',
        }
        return units[item] ? units[item] : null;
    }

    const items = renderHighlightsItems();

    return (
        <div className="highlights">
            <div className="highlights__title">Today`s Highlights</div>
            <div className="highlights__body">
                {items}
            </div>
        </div>
    );

}

export default Highlights;