'use strict'

import { getWeatherData } from "./weather-api.js";

const NUM_OF_DAYS = 5;

const dateRow = document.querySelector('.date-row');
const weatherRow = document.querySelector('.weather-row');
const citySearch = document.querySelector('#city-search');
const btn = document.querySelector('.btn');

const render = async (city) => {
  const weatherData = await getWeatherData(city);
  dateRow.replaceChildren();
  weatherRow.replaceChildren();
  for (let i = 0; i < NUM_OF_DAYS; i++) {
    const date = `<td class="date-col">${weatherData.dates[i]}</td>`;
    dateRow.insertAdjacentHTML('beforeend', date);

    const weather = `<td class="weather-col">${weatherData.temperatures[i]}°C</td>`;
    weatherRow.insertAdjacentHTML('beforeend', weather);
  }
}

btn.addEventListener('click', () => {
  const city = citySearch.value;
  render(city);
}, false);