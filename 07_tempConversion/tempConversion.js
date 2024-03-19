const convertToCelsius = function(temperatureFahrenheit) {
  // °C = (°F - 32) × 5/9
  let temperatureCelsius = (Math.round((((temperatureFahrenheit - 32) * 5) / 9) * 10)) / 10;
  return temperatureCelsius;
};

const convertToFahrenheit = function(temperatureCelsius) {
  // °F = (9/5 × °C) + 32
  let temperatureFahrenheit = (Math.round((((9/5) * temperatureCelsius) + 32) * 10)) / 10;
  temperatureFahrenheit = (temperatureFahrenheit * 10) / 10;
  return temperatureFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
