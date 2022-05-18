// variables
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var temp_max = document.querySelector('.temp_max');
var temp_min = document.querySelector('.temp_min');
var feels_like = document.querySelector('.feels_like');
var humidity = document.querySelector('.humidity');
var pressure= document.querySelector('.pressure');



// Fetch Portsmouth weather data from API 
fetch("https://api.openweathermap.org/data/2.5/weather?q=Portsmouth&appid=26454076d70b86ab47dd9c4f0a90ce93")
// convert response strings to json objects
    .then(response => response.json())
    .then(data => {
        // display whole api response in browser
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var temp_maxValue = data['main']['temp_max'];
        var temp_minValue = data['main']['temp_min'];
        var feels_likeValue = data['main']['feels_like'];
        var humidityValue = data['main']['humidity'];
        var pressureValue = data['main']['pressure'];
      



// inputing the API data giving with certain forms
        desc.innerHTML = "Desc - " + descValue;
        temp.innerHTML = "Temp - " + tempValue;
        temp_max.innerHTML = "Temp_max - " + temp_maxValue;
        temp_min.innerHTML = "Temp_min - " + temp_minValue;
        feels_like.innerHTML = "Feels_like - " + feels_likeValue;
        humidity.innerHTML = "Humidity - " + humidityValue;
        pressure.innerHTML = "Pressure - " + pressureValue;

     })
    //   dispaly error in alert 
     .catch(err => alert("Wrong city name!"));

    
