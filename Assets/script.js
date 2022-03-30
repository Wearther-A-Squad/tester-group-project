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
      if (url == amazonUrl) {
        displayProduct(data);
      }
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
// https://www.weatherapi.com/docs/#apis-forecast < Link to forecast endpoint url

// -------- -------- -------- -------- RapidAPI (Amazon) - required options and URL
const amazonOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'amazon23.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffae5646afmshec63d61fbd07b2fp17ee73jsn3371d91d22c0',
  },
};

// For now i hardcoded 'ipad' but this data will be returned from user input
var searchTerm = 'ipad';
var amazonUrl = `https://amazon23.p.rapidapi.com/product-search?query=${searchTerm}&country=US`;

// -------- -------- -------- -------- Executing the fetch
// Fetch function is reusable - Required: Include the API url as the parameter
fetchApi(weatherUrl); // This fetches for the weather data
// fetchApi(amazonUrl) // This fetches from the Amazon data

// -------- -------- -------- -------- Displaying the product
// Only showing 1 products for testing purposes, will include a loop to iterate over all products for final application
// This function updates the HTML elements with the appropriate data from the fetch function
function displayProduct(data) {
  var productTitleEl = document.getElementById('product-title');
  var productTitle = data.result[0].title;
  productTitleEl.textContent = productTitle;

  var productImgEl = document.getElementById('product-img');
  var productImg = data.result[0].thumbnail;
  productImgEl.src = productImg;
  productImgEl.alt = searchTerm;

  var productPriceEl = document.getElementById('product-price');
  var productImg = data.result[0].price.current_price;
  productPriceEl.textContent = `$${productImg}`;

  var productLinkEl = document.getElementById('product-link');
  var productLink = data.result[0].url;
  productLinkEl.href = productLink;
  productLinkEl.innerText = 'Link to product page';
}

// !!!!!!! Future updates
// - Based on users SIZE preference, return clothing accordingly
