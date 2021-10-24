import { getWeatherByCity } from "./apiService.js";

const viewElems = {};

const getDOMElems = id => {
    return document.getElementById(id);
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener('keydown', onEnterSubmit);
    viewElems.searchButton.addEventListener('click', onClickSubmit);
    viewElems.returnToSearchBtn.addEventListener('click',returnToSearch);
}

const connectHTMLElems = () => {  
    viewElems.weatherSearchView = getDOMElems('weatherSearchView');
    viewElems.weatherForecastView = getDOMElems('weatherForecastView');
    viewElems.mainContainer =getDOMElems('mainContainer');

    viewElems.searchInput = getDOMElems('searchInput');
    viewElems.searchButton = getDOMElems('searchButton');
    viewElems.weatherCityContainer = getDOMElems('weatherCityContainer');

    viewElems.weatherCity = getDOMElems('weatherCity');
    viewElems.weatherIcon = getDOMElems('weatherIcon');

    viewElems.weatherCurrentTemp = getDOMElems('weatherCurrentTemp');
    viewElems.weatherMaxTemp = getDOMElems('weatherMaxTemp');
    viewElems.weatherMinTemp = getDOMElems('weatherMinTemp');

    viewElems.returnToSearchBtn = getDOMElems('returnToSearchBtn');
}

const initializeApp = () =>{
    connectHTMLElems();
    setupListeners();
}

const onEnterSubmit = event => {
    // console.log(event);
    if(event.key === 'Enter'){
        fadeInOut();
        let query = viewElems.searchInput.value;
        getWeatherByCity(query)
        .then(data => {
            // console.log(data)
            displayWeatherData(data);
        });
        
    }
};

const onClickSubmit = () => {
    fadeInOut();
    let query = viewElems.searchInput.value;
    getWeatherByCity(query)
    .then(data => {
        // console.log(data);
        displayWeatherData(data);
    });
};

const displayWeatherData = data => {
    switchView();
    fadeInOut();

    const weather = data.consolidated_weather[0];

    console.log(weather);

    viewElems.weatherCity.innerText = data.title;
    viewElems.weatherIcon.src = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
    viewElems.weatherIcon.alt = `weather state: ${weather.weather_state_name}`;
    const currentTemp = weather.the_temp.toFixed(2);
    const maxTemp = weather.max_temp.toFixed(2);
    const minTemp = weather.min_temp.toFixed(2);

    viewElems.weatherCurrentTemp.innerText = `current temp: ${currentTemp}°C`;
    viewElems.weatherMaxTemp.innerText = `max temp: ${maxTemp}°C`;
    viewElems.weatherMinTemp.innerText = `min temp: ${minTemp}°C`;
};

const fadeInOut = () => {
    if(viewElems.mainContainer.style.opacity === '1' || viewElems.mainContainer.style.opacity === ''){
        viewElems.mainContainer.style.opacity = '0';
    } else {
        viewElems.mainContainer.style.opacity = '1';
    }
}

const switchView = () => {
    if(viewElems.weatherSearchView.style.display !== 'none'){
        viewElems.weatherSearchView.style.display = 'none';
        viewElems.weatherForecastView.style.display = 'flex';
    } else {
        viewElems.weatherSearchView.style.display = 'flex';
        viewElems.weatherForecastView.style.display = 'none';
    }
};

const returnToSearch = () => {
    fadeInOut();
    setTimeout(() => {
        switchView();
        fadeInOut();
    }, 500);
}

document.addEventListener('DOMContentLoaded', initializeApp);