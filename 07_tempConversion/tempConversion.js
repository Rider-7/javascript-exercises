const convertToCelsius = function(tempF) {
  if (typeof(tempF) !== "number") return "ERROR";

  const FORMULA = (tempF - 32.0) * 5.0/9.0;

  let tempC = Math.round(FORMULA * 10.0) / 10.0;
  tempC = tempC.toFixed(1);
  tempC = parseFloat(tempC);

  return tempC;
};

// tempF = tempC * (9/5) +32

const convertToFahrenheit = function(tempC) {
  if (typeof(tempC) !== "number") return "ERROR";

  const FORMULA = (tempC * 9.0/5.0) + 32.0;

  let tempF = Math.round(FORMULA * 10.0) / 10.0;
  tempF = tempF.toFixed(1);
  tempF = parseFloat(tempF);

  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
