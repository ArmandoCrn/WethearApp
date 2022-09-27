import meteo from "./weather";

// this is the Obj when the meteo fetch data
let currentMeteo;

// Prevent Default form
const form = document.querySelector(".search-group");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});

// Search Button for the meteo
const search = document.querySelector(".search-btn");
search.addEventListener("click", meteo);

const city = document.querySelector("#card .city");
const deg = document.querySelector("#card .deg");
const img = document.querySelector("#card img");
const feels = document.querySelector("#card .feels");
const humidity = document.querySelector("#card .humidity");
const wind = document.querySelector("#card .wind");

// Set UI Function
export function setUi(meteo) {
  city.innerText = meteo.name;
  deg.innerText = `${meteo.temp} °C`;
  img.src = `./img/${meteo.icon}.png`;
  img.alt = `${meteo.alt}`;
  feels.innerText = `Feels Like: ${meteo.feels} °C`;
  humidity.innerText = `Humidity: ${meteo.humidity}%`;
  wind.innerText = `Wind: ${meteo.wind} km/h`;
}

// Take the name of the city
export function takeCity() {
  const input = document.querySelector("#search-input");

  if (input.value !== "") return input.value;

  return null;
}

//Take the result of the meteo
export function takeObj(meteoObj) {
  currentMeteo = meteoObj;
}

// Switch Celsius and Farhenight and UI -> C/F
const cToFarh = document.querySelector(".switch-deg");
cToFarh.addEventListener("click", () => changeDeg(currentMeteo));

function changeDeg(data) {
  const currentDeg = changeUI();
  if (currentDeg === "F") {
    deg.innerText = `${data.farhen} °F`;
    feels.innerText = `Feels Like: ${data.feelsFarhen} °F`;
  }

  if (currentDeg === "C") {
    deg.innerText = `${data.temp} °C`;
    feels.innerText = `Feels Like: ${data.feels} °C`;
  }
}

function changeUI() {
  const c = document.querySelector(".switch-deg span:nth-child(1)");
  const f = document.querySelector(".switch-deg span:nth-child(2)");

  //Active class from C to F
  if (c.className.includes("is-active")) {
    c.classList.remove("is-active");
    f.classList.add("is-active");
    return "F";
  } else {
  }

  //Active class from F to C
  if (f.className.includes("is-active")) {
    f.classList.remove("is-active");
    c.classList.add("is-active");
    return "C";
  }
}
