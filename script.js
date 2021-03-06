let weather = {
    apiKey:"d45f2d14ebbbd97840c1bfb5cdd96da4",
    fetchWeather: function(city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
             + city
             +"&units=metric&appid="
             + this.apiKey
        )   
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        let tempInt = parseInt(temp)
        if (tempInt == NaN)
        console.log("error")
        else
        document.querySelector(".temp").innerText = Math.trunc (tempInt) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"; 
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener('click', function() {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
         weather.search();
        }
    });

weather.fetchWeather("Lutsk");

// const api = {
//     key: "d45f2d14ebbbd97840c1bfb5cdd96da4",
//     baseurl: "https://api.openweathermap.org/data/2.5/"
// };
