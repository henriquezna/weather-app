const getWeather = async (place) => {
    event.preventDefault()
    let weatherAPI;

    const locationForm = document.getElementById("fLocation");

    if(place == null || ""){
        place = locationForm.value;
    }

    weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${weatherID}`, {mode: 'cors'});
    
    const weather =  await weatherAPI.json();
    console.log("WEATHER",  weather);
    console.log( weather.name);

    let parsedData = parseData(weather);

    display(parsedData);
}

function parseData(data){
    let weatherData = [];
    weatherData.push(data.name);
    weatherData.push(data.main.temp);

    return weatherData;
}

function display(data){
    const container = document.getElementById("container");

    container.innerText = data[0] + " Temp: " + Math.round(((data[1]-273.15)*(9/5)+32));
}
