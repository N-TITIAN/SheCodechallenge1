let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let city = prompt("Enter a city");
function celsiusToFahrenheit(tempCelcuis) {
  return (tempCelcuis * 9) / 5 + 32;
}

if (city in weather) {
  tempFahrenheit = celsiusToFahrenheit(weather[city].temp);
  tempFahrenheit = Math.round(tempFahrenheit);
  weather[city].temp = Math.round(weather[city].temp);
  alert(
    `It is currently ${weather[city].temp}°C (${tempFahrenheit}) in ${city}`
  );
} else {
  alert(`Sorry, we don't know the weather for this city, try going to
 https://www.google.com/search?q=weather+${city} `);
}
