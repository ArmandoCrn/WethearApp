import { setUi, takeCity, takeObj } from "./ui";

const API_KEY = "33a1bf33e27c4bdf66bc75107bc049cd";
const endpoint = "https://api.openweathermap.org/data/2.5/weather";

export default async function getMeteo() {
  const city = takeCity() ?? "london";
  const apiUrl = `${endpoint}?q=${city}&units=metric&appid=${API_KEY}`;
  const data = await getData(apiUrl);

  // Catch error
  if (data === null) {
    alert(`Error: City ${city} not found`);
    return;
  }

  const ourMeteo = {
    name: data.name,
    temp: Math.round(data.main.temp),
    alt: data.weather[0].description,
    icon: data.weather[0].icon,
    farhen: toFahren(data.main.temp),
    feels: Math.round(data.main.feels_like),
    feelsFarhen: toFahren(data.main.feels_like),
    humidity: data.main.humidity,
    wind: Math.round(data.wind.speed),
  };

  setUi(ourMeteo);
  takeObj(ourMeteo);
}

function toFahren(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

async function getData(url) {
  const response = await fetch(url, { mode: "cors" });

  if (response.status === 200) return response.json();

  return null;
}
