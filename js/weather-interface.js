var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
      .then
      (
        function(response)
        {
          console.log(JSON.stringify(response));
          console.log(response);
           $('.showWeather').text("The weather in " + city + " is " + response.weather[0].description);
         }
      )
      .fail
      (
        function(error)
        {
          console.log(JSON.stringify(error));
          console.log(error);

          $('.showWeather').text(error.responseJSON.message);
        }
      );

    console.log("Notice: The GET request has been made.");

  });
});
