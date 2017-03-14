var Weather = require('./../js/weather.js').weatherModule;
var displayWeather = function(success, weatherData, city) {
  if (success) {
    $('.showWeather').text("The weather in " + city + " is " + weatherData);
  } else {
    $('.showWeather').text(weatherData);
  }
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();

  $('#weatherLocation').click(function() {
    event.preventDefault();
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    currentWeatherObject.getWeather(city, displayWeather);

    console.log("Notice: The GET request has been made.");

  });
});
