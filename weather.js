const weather = document.querySelector(".js-weather");
const weatherBanner = document.querySelector(".weather_banner");
const weatherDescription = weatherBanner.querySelector("span");
const weatherTemperature = document.querySelector(".weather_temperature")
const weatherError = document.querySelector(".weather_error");

const COORDS = 'coords';
const API_KEY = 'ab8d98672d24cc3c15c75ea505a1b214';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const weatherMain = json.weather[0].main;
        const weatherIcon = json.weather[0].icon;
        const temperature = json.main.temp;
        const place = json.name;
        weatherDescription.innerText = weatherMain;
        const weatherImg = document.createElement("img");
        weatherImg.width = weatherImg.height = 40;
        weatherImg.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        weatherBanner.prepend(weatherImg);
        weatherTemperature.innerText = `${temperature}°C @ ${place}`;
        weatherBanner.classList.add("showing");
        weatherTemperature.classList.add("showing");
        weatherError.classList.remove("showing");
        //console.log(temperature);
    })
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(position){
    weatherBanner.classList.remove("showing");
    weatherTemperature.classList.remove("showing");
    weatherError.classList.add("showing");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        //console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();