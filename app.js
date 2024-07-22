document
  .getElementById("weatherForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiKey = "506bb09d901549918f164623242107"; 
    const weatherDataDiv = document.getElementById("weatherData");

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      const { location, current } = data;

      weatherDataDiv.innerHTML = `
            <h2>Weather in ${location.name}, ${location.country}</h2>
            <p>Temperature: ${current.temp_c}°C</p>
            <p>Condition: ${current.condition.text}</p>
            <img src="${current.condition.icon}" alt="Weather icon">
            <p>Humidity: ${current.humidity}%</p>
            <p>Wind: ${current.wind_kph} kph</p>
        `;
    } catch (error) {
      weatherDataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
  
