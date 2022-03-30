// -------- -------- -------- -------- Universal fetch function
var fetchApi = async (url) => {
  // Execute a try and catch block to catch if there is no network
  try {
    var res = await fetch(url);
    var data = await res.json();

    // If the response is 400...
    if (res.status >= 400) {
      // That means no proper data was returned
      alert('No data returned');
    } else {
      // Otherwise the data returned successfully
      console.log(data);
    }
    // If there is no network connection, execute the catch block function
  } catch (error) {
    alert('Failed to connect to API due to network issues');
  }
};

// -------- -------- -------- -------- Weatherapi - required parameters and URL
var APIKEY = '6aa15f30207248b9b2b135920223003';
var searchedCity = 'Toronto';
var weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${searchedCity}&aqi=no`;

// -------- -------- -------- -------- Executing the fetch
// Fetch function is reusable - Required: Include the API url as the parameter
fetchApi(weatherUrl);
