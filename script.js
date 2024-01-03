    const apiKey = "cf89091882a3a3776708632e825b7f04";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const weatherDiv = document.querySelector('.weather');
    const errorDiv = document.querySelector('.error');
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");//when click on this search button it will send city information to checkWeather() function
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            errorDiv.style.display = 'block';///display "Invalid city name" for wrong city name
            weatherDiv.style.display = 'none';//hiding deault weather info
            
        }
        else{
            var data = await response.json();
            console.log(data);

        // update default weather text
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".stmt").innerHTML=data.weather[0].description;
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

        // update default weather image
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        weatherDiv.style.display = 'block'; // display wetaher info when city name is entered 
        errorDiv.style.display = 'none';//hiding Invalid city name when city name is correct entered
        }

    }

    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    })


  