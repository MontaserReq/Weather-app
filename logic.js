//Make Varibales
const apiKey = "603defa4f14fc8d886f9bb45b40aecc2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".weaher-search input");
const btn = document.querySelector(".weaher-search button");
const image = document.querySelector('.weather-state .weaher-icon');

//Function and pull API from (Open Weather)
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    //get element 
    document.querySelector(".weather-state h1").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".weather-state p").innerHTML = data.name;
    document.querySelector(".state-humidity h1").innerHTML = Math.round(data.main.humidity) + " % ";
    document.querySelector(".state-wind h1 ").innerHTML = Math.round(data.wind.speed) + " km/h";

    //control images
    if (data.weather[0].main == "Clouds") {
        image.src = "images/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
        image.src = "images/clear.png";
    }
    if (data.weather[0].main == "Drizzle") {
        image.src = "images/drizzle.png";
    }
    if (data.weather[0].main == "Rain") {
        image.src = "images/rain.png";
    }
    if (data.weather[0].main == "Mist") {
        image.src = "images/mist.png";
    }
    if (data.weather[0].main == "Snow") {
        image.src = "images/snow.png";
    }
}

//When click on button 
btn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
