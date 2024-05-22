class WeatherService {
    getWeatherData = async () => {
        let res = await fetch("https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=Ivano-Frankivsk");

        if (res.status === 200) {
            let weatherData = await res.json();
            return this.transformData(weatherData);
        } else throw new Error(`Something went wrong! status: ${res.status}`);
    }

    transformData = (weatherData) => {
        let date;
        if(weatherData.dt) {
            console.log(weatherData.dt);
            date = new Date(weatherData.dt * 1000).toLocaleDateString();
        }
        console.log(date);

        return {
            id: weatherData.id,
            city: weatherData.name,
            date: weatherData.dt,
            sunrise: weatherData.sys.sunrise,
            sunset: weatherData.sys.sunset,
            visibility: weatherData.visibility,
            windSpeed: weatherData.wind.speed,
            windDirection: weatherData.wind.deg,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
            temp: Math.round(weatherData.main.temp),
            pressure: weatherData.main.pressure,
            humidity: weatherData.main.humidity,
        }
    }
}

export default WeatherService;