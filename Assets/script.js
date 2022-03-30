// -------- -------- -------- -------- Universal fetch function
var fetchApi = async (url) => {
  // Execute a try and catch block to catch if there is no network
  try {
    var res = '';
    // Specific URLs require specific options
    url == amazonUrl
      ? // If the url is for Amazon, include options
        (res = await fetch(url, amazonOptions))
      : // else fetch without options
        (res = await fetch(url));

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

// -------- -------- -------- -------- WeatherAPI - required parameters and URL
var APIKEY = '6aa15f30207248b9b2b135920223003';
var searchedCity = 'Toronto';
var weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${searchedCity}&aqi=no`;
// The above url returns the CURRENT weather, for the five-day forecast, there is a different URL

// -------- -------- -------- -------- RapidAPI (Amazon) - required options and URL
const amazonOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'amazon23.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffae5646afmshec63d61fbd07b2fp17ee73jsn3371d91d22c0',
  },
};

// There is a MASSIVE request delay? Might need to consider the premium versions
var amazonUrl =
  'https://amazon23.p.rapidapi.com/product-search?query=xbox&country=US';

// -------- -------- -------- -------- Executing the fetch
// Fetch function is reusable - Required: Include the API url as the parameter
fetchApi(amazonUrl);

// !!!!!!! Future updates
// - Based on users SIZE preference, return clothing accordingly
