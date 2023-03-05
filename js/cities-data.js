'use strict'

const CITIES = [
  {city: 'Kyiv', latitude: 50.4375, longitude: 30.5},
  {city: 'Kharkiv', latitude: 50.0, longitude: 36.25},
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