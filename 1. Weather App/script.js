// This is my code

// alert("hello, World!");
// const apiKey = "05dc1c8c10a51abfc67faa954ada7775";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric";

// async function checkWeather(){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     const data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=data.main.temp;
//     document.querySelector(".humidity").innerHTML=data.main.humidity;
//     document.querySelector(".wind").innerHTML=data.wind.speed;
// }

//This is improved version down below

// const apiKey = "05dc1c8c10a51abfc67faa954ada7775";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox=document.querySelector(".search input");
// const searchBtn=document.querySelector(".search button");

// async function checkWeather(city) {
//     // try {
//         const response = await fetch(apiUrl + encodeURIComponent(city) + `&appid=${apiKey}`);
//         // if (!response.ok) {
//         //     throw new Error(`HTTP error! Status: ${response.status}`);
//         // }
//         const data = await response.json();
//         console.log(data);

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = `${math.round(data.main.temp)} °C`;
//         document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
//         document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
//     // } catch (error) {
//     //     console.error("Failed to fetch weather data:", error);
//     // }
// }

// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// })

const apiKey = "05dc1c8c10a51abfc67faa954ada7775";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(
      apiUrl + encodeURIComponent(city) + `&appid=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )} °C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    let weatherCondition = data.weather[0].main.toLowerCase();
    weatherIcon.src = `./images/${weatherCondition}.png`;

    // if (data.weather[0].main == "Clear") {
    //   weatherIcon.src = "./images/clear.png";
    // } else if (data.weather[0].main == "Clouds") {
    //   weatherIcon.src = "./images/clouds.png";
    // } else if (data.weather[0].main == "Drizzle") {
    //   weatherIcon.src = "./images/drizzle.png";
    // } else if (data.weather[0].main == "Rain") {
    //   weatherIcon.src = "./images/rain.png";
    // } else if (data.weather[0].main == "Snow") {
    //   weatherIcon.src = "./images/snow.png";
    // }

    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    alert("City not found! Please try again."); // (optional) show a user-friendly message
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
