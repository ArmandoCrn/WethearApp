export default async function getMeteo() {
  const API_KEY = "33a1bf33e27c4bdf66bc75107bc049cd";
  const endpoint = "https://api.openweathermap.org/data/2.5/weather";

  // FIXME: In teoria questo deve poi essere preso dinamicamente
  const city = "london";

  const apiUrl = `${endpoint}?q=${city}&appid=${API_KEY}`;

  const data = await fetch(apiUrl, { mode: "cors" }).then((res) => res.json());

  console.log(data);
}

/*
In futuro, per cambiare l'icona, il nome e tutto quello che accade a schermo
basta chiamare la funzione che creo in un altro modulo qui
e passargli di conseguenza i dati che ottengo dall'api sotto forma di obj

Ergo, la funzione nel modulo avrà principalmente parameters di riferimento
per far accadere cose
*/
