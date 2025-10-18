const APIKEY = 'e25ddb66337bc8c7f6c572ffe0527d30';

const fetchWeather = async ()=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${APIKEY}`);
    const data = await response.json();
    console.log(data)
}

fetchWeather()