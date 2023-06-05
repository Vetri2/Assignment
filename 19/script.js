// Fetch weather data from OpenWeatherMap API
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY"
)
    .then((response) => response.json())
    .then((data) => {
        const weatherElement = document.getElementById("weather");
        weatherElement.innerHTML = `Weather in London: ${data.weather[0].description}`;
    })
    .catch((error) => console.error(error));

// Fetch a Chuck Norris joke from the API
fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
        const jokeElement = document.getElementById("joke");
        jokeElement.innerHTML = `Chuck Norris Joke: ${data.value}`;
    })
    .catch((error) => console.error(error));

// Fetch random user data from the Random User API
fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
        const userElement = document.getElementById("user");
        const user = data.results[0];
        userElement.innerHTML = `
      <img src="${user.picture.large}" alt="User Avatar">
      <p>Name: ${user.name.first} ${user.name.last}</p>
      <p>Email: ${user.email}</p>
    `;
    })
    .catch((error) => console.error(error));
