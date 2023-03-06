'use strict'

const CITIES = [
  {city: 'Kyiv', latitude: 50.4375, longitude: 30.5},
  {city: 'Kharkiv', latitude: 50.0, longitude: 36.25},
  {city: 'Hadiach', latitude: 50.22, longitude: 34.0},
  {city: 'Washington', latitude: 38.54, longitude: -77.0},
];

const validName = (city) => {
  const cityLower = city.toLowerCase();
  const valid = city[0].toUpperCase() + cityLower.slice(1);
  return valid;
}

const getCityData = (city) => {
  const valid = validName(city);
  const data = CITIES.find((data) => data.city === valid);
  return data;
}

export { getCityData };