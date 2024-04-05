let searchedCity = document.querySelector(".search-city");
let find = document.querySelector("#btn");
let weatherIcon = document.querySelector(".weather-icon");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind-speed");
let weatherCity = document.querySelector(".city");

const API_KEY = "c8290a0762a2d8d80f4df82dc16186e9";
// const API_KEY = "c5LBhHUAF9ys7oiR5KaG4zm9URuCdTOF"; // accuweather api
// let getKey = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=c5LBhHUAF9ys7oiR5KaG4zm9URuCdTOF&q=patna` // accuweather api




find.addEventListener("click", ()=>{
    let city = searchedCity.value;
    weatherInfo(city);
})

async function weatherInfo(city) {
    try {
        var response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
        const data = await response.json();
        const lat = data[0].lat
        const lon = data[0].lon
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        const weather=await res.json()
        renderData(weather);
    } catch (err) {
        console.error(err);
    }
}

function renderData(weatherData) {
    console.log(weatherData)
    // 0K − 273.15 = -273.1°C
    temperature.innerHTML = kelvinToCelsius(weatherData.main.temp)+"°c";
    humidity.innerHTML = weatherData.main.humidity+"%";
    wind.innerHTML = weatherData.wind.speed +" km/h";
    weatherCity.innerHTML = weatherData.name;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`

    // console.log(weatherData.name);
    // console.log(weatherData.main.temp);
    // console.log(weatherData.main.humidity);
    // console.log(weatherData.wind.speed);
   
    
    // weatherCity.innerHTML = weatherData[0].name
}

function kelvinToCelsius(kelvin) {
    return Math.floor(kelvin - 273.15);
}


