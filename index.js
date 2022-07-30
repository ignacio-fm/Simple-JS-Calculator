// Import stylesheets
import './style.css';
window.takeValue = takeValue;
window.clearValues = clearValues;
window.calculateValues = calculateValues;

function takeValue(x) {
  document.getElementById('inputResult').value += x;
}

function clearValues(y) {
  document.getElementById('inputResult').value = y;
}

function calculateValues(event) {
  event.preventDefault();
  var result = eval(document.getElementById('inputResult').value);
  document.getElementById('inputResult').value = result;
}
