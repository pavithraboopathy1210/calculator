function getWeather() {

    const apiKey = "f90b7cf9ddd272ee73083b7e8691a195";

    let cityName = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {

            let temperature = data.main.temp;
            let skyType = data.weather[0].main;

            document.getElementById("result").innerHTML =
                `<h3>Weather Details</h3>
                 <p>🌡 Temperature: ${temperature}°C</p>
                 <p>☁ Sky: ${skyType}</p>`;

        });

}