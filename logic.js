const apiKey = "603defa4f14fc8d886f9bb45b40aecc2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".weaher-search input");
const btn = document.querySelector(".weaher-search button");
const image = document.querySelector('.weather-state .weaher-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".weather-state h1").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".weather-state p").innerHTML = data.name;
    document.querySelector(".state-humidity h1").innerHTML = Math.round(data.main.humidity) + " % ";
    document.querySelector(".state-wind h1 ").innerHTML = Math.round(data.wind.speed) + " km/h";


    if (data.weather[0].main == "Clouds") {
        image.src = "./clouds.png";
    }
    if (data.weather[0].main == "Clear") {
        image.src = "./clear.png";
    }
    if (data.weather[0].main == "Drizzle") {
        image.src = "./drizzle.png";
    }
    if (data.weather[0].main == "Rain") {
        image.src = "./rain.png";
    }
    if (data.weather[0].main == "Mist") {
        image.src = "./mist.png";
    }
    if (data.weather[0].main == "Snow") {
        image.src = "./snow.png";
    }

}

btn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
