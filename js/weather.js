var apiKey = require('./../.env').apiKey;

function Weather(){
}

Weather.prototype.getWeather = function(city, callBack) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then
    (
      function(response)
      {
        console.log(JSON.stringify(response));
        console.log(response);
        callBack(true, response.weather[0].description, city);
        // $('.showWeather').text("The weather in " + city + " is " + response.weather[0].description);
      }
    )
    .fail
    (
      function(error)
      {
        console.log(JSON.stringify(error));
        console.log(error);

        callBack(false, error.responseJSON.message);
        // $('.showWeather').text(error.responseJSON.message);
      }
    );

};

exports.weatherModule = Weather;
