const weather = document.querySelector(".js-date");

const API_KEY = "a6558e0fe21ec6750dbdfa048d44f2ef";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerHTML = `${temperature}C ${place}`;
        });
}

function saveCoolds(coordsObject) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObject = {
        latitude,
        longitude,
    };
    saveCoolds(coordsObject);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
