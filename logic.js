// Make Variables
const apiKey = "603defa4f14fc8d886f9bb45b40aecc2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".weaher-search input");
const btn = document.querySelector(".weaher-search button");
const image = document.querySelector('.weather-state .weaher-icon');

// Function and pull API from (Open Weather)
async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (!response.ok) { // Check if the response is successful
            throw new Error('City not found');
        }

        const data = await response.json();
        console.log(data);

        // Update elements with data
        document.querySelector(".weather-state h1").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".weather-state p").innerHTML = data.name;
        document.querySelector(".state-humidity h1").innerHTML = Math.round(data.main.humidity) + " % ";
        document.querySelector(".state-wind h1").innerHTML = Math.round(data.wind.speed) + " km/h";

        // Control images
        switch (data.weather[0].main) {
            case "Clouds":
                image.src = "images/clouds.png";
                break;
            case "Clear":
                image.src = "images/clear.png";
                break;
            case "Drizzle":
                image.src = "images/drizzle.png";
                break;
            case "Rain":
                image.src = "images/rain.png";
                break;
            case "Mist":
                image.src = "images/mist.png";
                break;
            case "Snow":
                image.src = "images/snow.png";
                break;
        }

    } catch (error) {
        // Handle errors
        console.error(error);
        document.querySelector(".weather-state h1").innerHTML = '';
        document.querySelector(".weather-state p").innerHTML = 'City not found';
        document.querySelector(".state-humidity h1").innerHTML = '';
        document.querySelector(".state-wind h1").innerHTML = '';
        image.src = "/images/Neon Green Error Message UI Funny Meme.png"; // Error image
    }
}

// When click on button
btn.addEventListener("click", () => {
    if (searchBox.value.trim() === '') {
        alert("Fill the input field");
    } else {
        checkWeather(searchBox.value);
        searchBox.value = '';
    }
});
