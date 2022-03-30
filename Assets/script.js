var baseUrl = 'http://api.weatherapi.com/v1/';
var APIKEY = '6aa15f30207248b9b2b135920223003';
var searchedCity = 'Toronto';

var extractWeather = async () => {
  // Execute a try and catch block to catch if there is no network
  try {
    var url = `${baseUrl}current.json?key=${APIKEY}&q=${searchedCity}&aqi=no`;
    var res = await fetch(url);
    var weatherData = await res.json();

    // If the response is 400...
    if (res.status >= 400) {
      // That means the searched term does not return data
      alert('Enter a valid city');
    } else {
      // Otherwise the data returned successfully
      console.log(weatherData);
    }
    // If there is no network connection, execute the catch block function
  } catch (error) {
    alert('Failed to connect to API due to network issues');
  }
};

extractWeather();
