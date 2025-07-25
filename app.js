const apiKey = "107e677c32306fa2d924702416c84b17";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkWeather(searchBox.value);
    }
});

// searchBox.addEventListener("keydown", (e) => {
//     if (e.key === "Enter" || !e.shiftKey) {
//         e.preventDefault();
//         checkWeather(searchBox.value);
//     }
// });

// searchBox.addEventListener("input", () => {
//     searchBox.style.height = `${inputInitHeight}px`;
//     searchBox.style.height = `${searchBox.scrollHeight}px`;
// });
