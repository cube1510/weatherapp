import { getWeatherByCity } from "./apiService.js";

const viewElems = {};

const getDOMElems = id => {
    return document.getElementById(id);
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener('keydown', onEnterSubmit);
    viewElems.searchButton.addEventListener('click', onClickSubmit);
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
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then(data => console.log(data));
    }
};

const onClickSubmit = () => {

};

document.addEventListener('DOMContentLoaded', initializeApp);