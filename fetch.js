//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const API_KEY = "ebfa409f8c74cfaa9fbe4012e3cdb636";
const previousSearches = [];
window.onload = function () {
  const form = document.getElementById("search_form");
  const location = document.getElementById("location");
  const searchBtn = document.getElementById("search_btn");
  const cloudy = document.getElementById("cloudy");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const rain = document.getElementById("rain");
  const date = document.getElementById("date");
  const city = document.getElementById("city");
  const newCity = document.getElementById("new_city");
  const uvIndex = document.getElementById("uv_index");
  const previouslySearched = document.getElementById("previously_searched");
  const fiveDaysLink = document.getElementById("FivedaysWeather");
  const weatherList = document.getElementById("weather_list");

  const temperature = document.getElementById("temp");

  fiveDaysLink.addEventListener("click", function () {
    const hidden = weatherList.getAttribute("hidden");
    if (hidden) {
      weatherList.removeAttribute("hidden");
      fiveDaysLink.innerHTML = "Hide 5 days weather";
    } else {
      weatherList.setAttribute("hidden", true);
      fiveDaysLink.innerHTML = "Show 5 days weather";
    }
  });



  async function fetchLatLng() {
    try {
      //encodeURI  emptyspaces
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          location.value
        )}&appid=${API_KEY}`
      );
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetch5DaysWeather(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      const result = await response.json();
      weatherList.innerHTML = "";
      return result.list;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCurrentWeather(lat, lon) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}`
      );
      const response = await res.json();

      return response;
    } catch (error) {
      console.log(error);
    }
  }
  searchBtn.addEventListener("click", async function () {
    console.log("clicked", location.value);
    previouslySearched.innerHTML = "";
    previousSearches.forEach(function (search) {
      previouslySearched.innerHTML += `<p class="light-text suggestion">${search}</p>`;
    });

    previousSearches.push(location.value);

    const LagLng = await fetchLatLng();
    console.log({ LagLng });
    if (LagLng) {
      const lat = LagLng.coord.lat;
      const lon = LagLng.coord.lon;
      console.log(lat, lon);

        //make an empty array - find the method to stop duplication.
      const list = await fetch5DaysWeather(lat, lon);
      console.log({ list });
      const wList = [];
      list.forEach((item) => {
        const onlyDate = new Date(item.dt * 1000).getDate();
        if (!wList.includes(onlyDate) && wList.length !== 5) {
          wList.push(onlyDate);
          const date = new Date(item.dt * 1000).toLocaleDateString();
          const temp = item.main.temp;
          const humidity = item.main.humidity;
          const weather = item.weather[0].description;
          const wind = item.wind.speed;
          weatherList.innerHTML += `
                <li>
                    <div class="row px-3">
                        <p class="light-text">Date</p>
                        <p class="ml-auto">${date}</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Temperature</p>
                        <p class="ml-auto">${temp}</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Humidity</p>
                        <p class="ml-auto">${humidity}</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Weather</p>
                        <p class="ml-auto">${weather}</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Wind</p>
                        <p class="ml-auto">${wind}</p>
                    </div>
                </li>
            `;
        }
      });

      const currentWeather = await fetchCurrentWeather(lat, lon);
      if (currentWeather && currentWeather.current) {
        const current = currentWeather.current;
        city.innerHTML = location.value;
        if (current.dt) {
          date.innerHTML = new Date(current.dt * 1000).toLocaleDateString();
        }
        if (current.clouds) {
          cloudy.innerHTML = current.clouds + "%";
        }
        if (current.humidity) {
          humidity.innerHTML = current.humidity + "%";
        }
        if (current.wind_speed) {
          wind.innerHTML = current.wind_speed + "km/hr";
        }
        // if (current.temp.math) {
        //   temperature.innerHTML = current.temp;
        // }

        if (current.rain) {
          rain.innerHTML = current.rain && current.rain["1h"] + "mm";
        } else {
          rain.innerHTML = "0mm";
        }
        if (current.uvi) {
          uvIndex.innerHTML = current.uvi;
        }
      }
    }
  });
};
/*fetch('fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={ebfa409f8c74cfaa9fbe4012e3cdb636}
')
  .then(response => response.json())
  .then(data => console.log(input));
  */

// http://api.openweathermap.org/geo/1.0/direct?q=&limit=5&appid=ebfa409f8c74cfaa9fbe4012e3cdb636
