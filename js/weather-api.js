'use strict'

import { getCityData } from "./cities-data.js"

const weatherApi = async (city) => {
  const latitude = city.latitude;
  const longitude = city.longitude;
  const api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=Europe%2FLondon`;
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

const formatDates = (dates) => {
  const formatDates = [];
  for (const date of dates) {
    const formatDate = new Date(date).toLocaleDateString();
    formatDates.push(formatDate);
  }
  formatDates[0] = 'Today';
  formatDates[1] = 'Tomorrow';
  return formatDates;
}

const getWeatherData = async (city) => {

  const cityData = getCityData(city);
  const response = await weatherApi(cityData);

  const apiDates = response.hourly.time;
  const dateIndexes = [];
  const rawDates = apiDates.filter((date, index) => {
    const condition = date.includes('12:00');
    if (condition && dateIndexes.length < 5) dateIndexes.push(index);
    return condition;
  }).slice(0, 5);
  const dates = formatDates(rawDates);

  const temperatures = response.hourly.temperature_2m.filter((t, tempIndex) => {
    return dateIndexes.includes(tempIndex);
  });

  return { dates, temperatures };
}

export { getWeatherData };