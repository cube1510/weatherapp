export const getWeatherByCity = city => {
    return fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(resp => resp.json())
    .then(data => {
        const woeid = data[0].woeid;
        return fetch(`https://www.metaweather.com/api/location/${woeid}`)
        .then(resp2 => resp2.json())
        .then(data2 => data2)
            // {return console.log(data2.time);})
        // console.log(data);
    });
}