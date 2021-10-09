const viewElems = {};

const getDOMElems = id => {
    return document.getElementById(id);
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener('click', onClickSubmit)
    viewElems.searchButton.addEventListener('keydown', onEnterSubmit)
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

const onClickSubmit = () => {};
const onEnterSubmit = () => {};

document.addEventListener('DOMContentLoaded', initializeApp)