var temperatureInput = document.getElementById('temperature');
var inputUnitSelect = document.getElementById('input-unit');
var outputUnitSelect = document.getElementById('output-unit');
var convertBtn = document.getElementById('convert-btn');
var outputDisplay = document.getElementById('output');
convertBtn.addEventListener('click', convertTemperature);
function convertTemperature() {
  var temperature = parseFloat(temperatureInput.value);
  var inputU = inputUnitSelect.value;
  var outputUnit = outputUnitSelect.value;
  let cTemperature;
  if (inputU === 'Celsius') {
    
    if (outputUnit === 'Fahrenheit') {
      cTemperature = (temperature * 9/5) + 32;
    } else if (outputUnit === 'Kelvin') {
      cTemperature = temperature + 273.15;
    } else {
      cTemperature = temperature;
    }
  } else if (inputU === 'Fahrenheit') {
    if (outputUnit === 'Celsius') {
      cTemperature = (temperature - 32) * 5/9;
    } else if (outputUnit === 'Kelvin') {
      cTemperature = ((temperature - 32) * 5/9) + 273.15;
    } else {
      cTemperature = temperature;
    }
  } else if (inputU === 'Kelvin') {
    if (outputUnit === 'Celsius') {
      cTemperature = temperature - 273.15;
    } else if (outputUnit === 'Fahrenheit') {
      cTemperature = ((temperature - 273.15) * 9/5) + 32;
    } else {
      cTemperature = temperature;
    }
  }
  outputDisplay.innerText = `${cTemperature} ${outputUnit}`;
}


