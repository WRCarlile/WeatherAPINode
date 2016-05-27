var apiKey = require('./../.env').apiKey;

exports.Weather = function(){
}

exports.Weather.prototype.getWeather = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    return response.main.humidity;
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}
