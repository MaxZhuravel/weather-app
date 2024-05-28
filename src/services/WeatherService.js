class WeatherService {

    getWeatherData = async () => {
        let res = await fetch("https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=Ivano-Frankivsk");

        if (res.status === 200) {
            let weatherData = await res.json();
            return this.transformData(weatherData);
        } else throw new Error(`Something went wrong! status: ${res.status}`);
    }

    transformData = (weatherData) => {
        return {
            id: weatherData.id,
            city: weatherData.name,
            date: weatherData.dt,
            sunrise: weatherData.sys.sunrise,
            sunset: weatherData.sys.sunset,
            visibility: weatherData.visibility,
            windSpeed: weatherData.wind.speed,
            windDirection: weatherData.wind.deg,
            description: this.bigFirstSymbol(weatherData.weather[0].description),
            icon: weatherData.weather[0].icon,
            temp: Math.round(weatherData.main.temp),
            pressure: weatherData.main.pressure,
            humidity: weatherData.main.humidity,
            clouds: weatherData.clouds.all,
            highlights: [
                {title: 'Pressure', value: weatherData.main.pressure},
                {title: 'Wind Status', value: [weatherData.wind.speed, weatherData.wind.deg]},
                {title: 'Sunrise & Sunset', value: [weatherData.sys.sunrise, weatherData.sys.sunset]},
                {title: 'Humidity', value: weatherData.main.humidity},
                {title: 'Visibility', value: weatherData.visibility / 1000},
                {title: 'Clouds', value: weatherData.clouds.all}
            ],
        }
    }

    bigFirstSymbol = (string) => {
        let wordsArr = string.split(' ');
        let firstSymbolArr = wordsArr.map(word => word[0].toUpperCase());
        return wordsArr.map((word, i) => firstSymbolArr[i] + word.slice(1)).join(' ');
    }

}

export default WeatherService;