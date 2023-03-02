let searchButton = $('#search-button');

let getWeatherData = () => {
  let citySearch = $('#search-bar').val();
  let apiURL = "api.openweathermap.org"; // Main Weather API URL
  let userSearch = citySearch; 
  let APIKey = "107d1fdb9fa2b933ecc98f2db7577eeb";
  let weatherApiInformation = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&appid=" + APIKey + '&units=imperial'; // API parameters that allows user to receive weather info
  let date = dayjs().format('dddd MMMM D, YYYY');

  let li = document.createElement('li');
  let hist = document.createElement('button');
  hist.textContent = citySearch;
  document.querySelector('#history').appendChild(li);
  li.appendChild(hist);
  hist.addEventListener('click', function() {
    $('#search-bar').val(this.textContent)
  })

  fetch(weatherApiInformation)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $('.cityName').text(data.name);
      $('.date').text(date);
      $('.icon').attr('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'); 
      $('.description').text(data.weather[0].description);
      $('.temp').text(data.main.temp);
      $('.feels-like').text(data.main.feels_like);
      $('.humidity').text(data.main.humidity);
      $('.wind').text(data.wind.speed);

  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&appid=' + APIKey + '&units=imperial')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $('.date-1').text(dayjs(data.list[4].dt_txt).format('MM/DD'));
      $('.icon-1').attr('src', 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png');
      $('.description-1').text(data.list[0].weather[0].description);
      $('.temp-1').text(data.list[0].main.temp);
      $('.feels-like-1').text(data.list[0].main.feels_like);
      $('.humidity-1').text(data.list[0].main.humidity);
      $('.wind-1').text(data.list[0].wind.speed);

      $('.date-2').text(dayjs(data.list[12].dt_txt).format('MM/DD'));
      $('.icon-2').attr('src', 'https://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png');
      $('.description-2').text(data.list[1].weather[0].description);
      $('.temp-2').text(data.list[1].main.temp);
      $('.feels-like-2').text(data.list[1].main.feels_like);
      $('.humidity-2').text(data.list[1].main.humidity);
      $('.wind-2').text(data.list[1].wind.speed);

      $('.date-3').text(dayjs(data.list[20].dt_txt).format('MM/DD'));
      $('.icon-3').attr('src', 'https://openweathermap.org/img/wn/' + data.list[2].weather[0].icon + '@2x.png');
      $('.description-3').text(data.list[2].weather[0].description);
      $('.temp-3').text(data.list[2].main.temp);
      $('.feels-like-3').text(data.list[2].main.feels_like);
      $('.humidity-3').text(data.list[2].main.humidity);
      $('.wind-3').text(data.list[2].wind.speed);

      $('.date-4').text(dayjs(data.list[28].dt_txt).format('MM/DD'));
      $('.icon-4').attr('src', 'https://openweathermap.org/img/wn/' + data.list[3].weather[0].icon + '@2x.png');
      $('.description-4').text(data.list[3].weather[0].description);
      $('.temp-4').text(data.list[3].main.temp);
      $('.feels-like-4').text(data.list[3].main.feels_like);
      $('.humidity-4').text(data.list[3].main.humidity);
      $('.wind-4').text(data.list[3].wind.speed);

      $('.date-5').text(dayjs(data.list[36].dt_txt).format('MM/DD'));
      $('.icon-5').attr('src', 'https://openweathermap.org/img/wn/' + data.list[4].weather[0].icon + '@2x.png');
      $('.description-5').text(data.list[4].weather[0].description);
      $('.temp-5').text(data.list[4].main.temp);
      $('.feels-like-5').text(data.list[4].main.feels_like);
      $('.humidity-5').text(data.list[4].main.humidity);
      $('.wind-5').text(data.list[4].wind.speed);
    })
  });
};

searchButton.on('click', getWeatherData);

