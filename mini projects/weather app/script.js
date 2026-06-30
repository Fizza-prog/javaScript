const weatherBtn = document.getElementById("locationBtn");
const weatherCard = document.querySelector(".card");

weatherBtn.addEventListener("click", getWeather);

async function getWeather() {

    navigator.geolocation.getCurrentPosition(async (position) => {

        const long = position.coords.longitude;
        const lat = position.coords.latitude;

        //  1. CITY FETCH (reverse geocoding)
        const geoResponse = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
        );

        const geoData = await geoResponse.json();
        const city = geoData.city || geoData.locality || "Unknown Location";

        //  2. WEATHER FETCH
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weather_code`
        );

        const data = await response.json();

        const temp = data.current.temperature_2m;
        const weatherCode = data.current.weather_code;

        //  UI UPDATE
        weatherCard.innerHTML = `
            <h2>${city}</h2>
            <h3>${temp}°C</h3>
            <p>${getWeatherText(weatherCode)}</p>
        `;
    });

}

// convert weather code to text
function getWeatherText(code) {
    if (code === 0) return "Clear Sky";
    if (code <= 3) return "Cloudy";
    if (code <= 67) return "Rainy";
    return "Extreme Weather";
}