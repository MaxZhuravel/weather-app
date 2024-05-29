class WeatherService {

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getWeatherData = async (city) => {
        const weatherData = await this.getResource(`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=${city}`);

        return this.transformData(weatherData);
    }

    transformData = (weatherData) => {
        return {
            id: weatherData.id,
            city: weatherData.name,
            date: weatherData.dt,
            description: this.bigFirstSymbol(weatherData.weather[0].description),
            icon: weatherData.weather[0].icon,
            temp: weatherData.main.temp,
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