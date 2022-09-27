export default async function getMeteo() {
  const API_KEY = "33a1bf33e27c4bdf66bc75107bc049cd";
  const endpoint = "https://api.openweathermap.org/data/2.5/weather";

  // FIXME: In teoria questo deve poi essere preso dinamicamente da quello che scriviamo noi
  const city = "london";

  const apiUrl = `${endpoint}?q=${city}&units=metric&appid=${API_KEY}`;

  const data = await fetch(apiUrl, { mode: "cors" }).then((res) => res.json());

  const ourMeteo = {
    name: data.name,
    alt: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: Math.round(data.main.temp),
    farhen: toFahren(data.main.temp),
    feels: Math.round(data.main.feels_like),
    feelsFarhen: toFahren(data.main.feels_like),
    humidity: data.main.humidity,
    wind: Math.round(data.wind.speed),
    min: Math.round(data.main.temp_min),
    max: Math.round(data.main.temp_max),
  };

  console.log(data);
  for (let data in ourMeteo) {
    console.log(ourMeteo[data]);
  }

  function toFahren(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
  }
}

/*
In futuro, per cambiare l'icona, il nome e tutto quello che accade a schermo
basta chiamare la funzione che creo in un altro modulo qui
e passargli di conseguenza i dati che ottengo dall'api sotto forma di obj

Ergo, la funzione nel modulo avrà principalmente parameters di riferimento
per far accadere cose

*/
