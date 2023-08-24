var searchbox=document.querySelector("#search input");
var searchbtn =document.querySelector('#search button');
var weatherIcon = document.querySelector('#weather-icon');
var card = document.querySelector('#card');

async function checkWeather(city)
{
    const response= await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=      apikey     ");
    var data= await response.json();
    console.log(data);

    if(response.status==404)
    {
        document.querySelector("#error").style.display="block";
        document.querySelector("#weather").style.display="none";
    }
    else{
        document.querySelector("#city").innerHTML=data.name;
        document.querySelector("#city-weather").innerHTML=data.weather[0].main;
        document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
        document.querySelector("#wind").innerHTML=data.wind.speed + "km/h"

        // var colorGradient;
		switch (data.weather[0].main) {
			case 'Clouds':
				weatherIcon.src = './clouds.png';
				card.style.background = `linear-gradient(160deg, #6e6ecb, #71a7f1, #a7c8f6)`;
				break;

			case 'Clear':
				weatherIcon.src = './clear.png';
				card.style.background = `linear-gradient(135deg, #dccee2, #F5B041)`;
				break;

			case 'Rain':
				weatherIcon.src = './rain.png';
				card.style.background = `linear-gradient(135deg, #0B3954,#4a7690 ,#696565)`;
				break;

			case 'Drizzle':
				weatherIcon.src = './drizzle.png';
				card.style.background = `linear-gradient(175deg, #f4a65d,#eed4bb, #BBD2C5, #688497, #304352)`;
				break;

			case 'Mist':
				weatherIcon.src = './mist.png';
				card.style.background = `linear-gradient(135deg, #F7CAC9, #92A8D1)`;
				break;

			case 'Snow':
				weatherIcon.src = './snow.png';
				card.style.background = `linear-gradient(160deg,#e8ebee,#b2e7f1,#50c6de, #78dff3)`;
				break;

			default:
				weatherIcon.src = './clouds.png';
				card.style.background = `linear-gradient(135deg, #F7CAC9, #92A8D1)`;
		}
        document.querySelector("#error").style.display="none";
        document.querySelector("#weather").style.display="block";
    }

}

searchbtn.addEventListener('click', ()=>{
    checkWeather(searchbox.value);
});

document.addEventListener('keydown',(Event)=>{
    if(Event.key == 'Enter')
    {
        // console.log("enter");
        checkWeather(searchbox.value);
    }
});

