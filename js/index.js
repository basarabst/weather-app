'use strict'

import { getWeatherData } from "./weather-api.js";

const NUM_OF_DAYS = 5;

const dateRow = document.querySelector('.date-row');
const weatherRow = document.querySelector('.weather-row');
const citySearch = document.querySelector('#city-search');
const btn = document.querySelector('.btn');

const render = async (city) => {
  const weatherData = await getWeatherData(city);
  for (let i = 0; i < NUM_OF_DAYS; i++) {
    const date = `<td class="date-col-${i}">${weatherData.dates[i]}</td>`;
    dateRow.insertAdjacentHTML('beforeend', date);

    const weather = `<td class="weather-col-${i}">${weatherData.temperatures[i]}</td>`;
    weatherRow.insertAdjacentHTML('beforeend', weather);
  }
}

render('kharkiv');