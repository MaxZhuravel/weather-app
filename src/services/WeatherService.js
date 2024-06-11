class WeatherService {

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getDailyWeatherData = async (city) => {
        const weatherData = await this.getResource(`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=${city}`);

        return this.transformData(weatherData);
    }

    getWeekWeatherData = async (city) => {
        const weatherData = await this.getResource(
            `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=${city}`
        );

        return this.transformWeekData(weatherData);
    };

    transformWeekData = (weatherData) => {

        const todayDate = weatherData.list[0].dt_txt.split(' ')[0];
        const lastDate = weatherData.list[weatherData.list.length - 1].dt_txt.split(' ')[0];
        const workList = weatherData.list.filter((item) => {
            if ((!item.dt_txt.includes(todayDate)) && (!item.dt_txt.includes(lastDate))) return item;
        })

        const days = workList.reduce((acc, current) => {
            const [date, hour] = current.dt_txt.split(' ');
            if (!acc[date])
                acc[date] = { min: current.main.temp, max: current.main.temp, icon: current.weather[0].icon};
            else {
                const min = Math.min(acc[date].min, current.main.temp);
                const max = Math.max(acc[date].max, current.main.temp);
                const icon = hour === '12:00:00' ? current.weather[0].icon : acc[date].icon;
                acc[date] = { min, max, icon};
            }
            return acc;
        }, {});

        return Object.entries(days).map(([key, value]) => {
            const day = new Date(key).toLocaleDateString('en-US', {
                weekday: 'short',
            });
            return { date: key, day, ...value };
        });
    }

    transformData = (weatherData) => {
        return {
            id: weatherData.id,
            city: weatherData.name,
            country: weatherData.sys.country,
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
        const wordsArr = string.split(' ');
        const firstSymbolArr = wordsArr.map(word => word[0].toUpperCase());
        return wordsArr.map((word, i) => firstSymbolArr[i] + word.slice(1)).join(' ');
    }

}

export default WeatherService;