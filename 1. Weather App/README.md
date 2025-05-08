# 🌦️ Weather App

A sleek and simple weather application built using HTML, CSS, and JavaScript. It fetches real-time weather data using the OpenWeatherMap API and displays the current temperature, humidity, and wind speed for any city entered by the user.

## 🚀 Features

- Search the weather by city name
- Real-time temperature, humidity, and wind speed
- Dynamic weather icons based on current conditions
- Responsive and modern UI

## 📸 Preview

![App Screenshot](./Images/screenshot_2.png)

## 🛠️ Technologies Used

- **HTML5** for structuring the content
- **CSS3** for styling and layout
- **JavaScript (Vanilla)** for API integration and DOM manipulation
- **OpenWeatherMap API** for fetching weather data

## 📦 Folder Structure

```
project/
│
├── index.html          # Main HTML file
├── style.css           # CSS for styling the app
├── script.js           # JavaScript logic for fetching and displaying weather
├── Images/             # Folder containing weather icons
│   ├── rain.png
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── snow.png
│   └── wind.png
```

## 🔧 How to Run

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Enter a city name and click the search button.

> 💡 Make sure you have an active internet connection to fetch data from the OpenWeatherMap API.

## 🔑 API Key

This project uses the OpenWeatherMap API. If you want to use your key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `script.js`:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## 📌 Note

- The app currently uses a hardcoded API key for demonstration purposes.
- Ensure your weather icons match the API response values (e.g., `rain`, `clouds`, etc.).


