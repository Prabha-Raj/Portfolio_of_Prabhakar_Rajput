const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="7bd851f41aa8d4d1220642c55cf519d2";
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city)
{	
	//alert("in");
	const res= await fetch(apiUrl+city+"&appid="+apikey);
	//alert("in2");
	const d= await res.json();
	//alert(d);
	console.log(d);
	document.querySelector('.temp').innerHTML=Math.round(d.main.temp)+" ℃";
	document.querySelector('.city').innerHTML=d.name;
	document.querySelector('.humidity').innerHTML=d.main.humidity+" %";
	document.querySelector('.wind').innerHTML=d.wind.speed+" km/h";
	var icon = d.weather[0].main;
	if(icon=='Haze'){
		weatherIcon.src="img/haze.png";
	}
	else if(icon=="Rain"){
			weatherIcon.src="img/rain.png";
	}
	else if(icon=="Snow"){
		weatherIcon.scr="img/snow.png";
	}
	else if(icon=="Mist"){
		weatherIcon.src="img/mist.png";
	}
	else if(icon=="Clear"){
		weatherIcon.src="img/clear.png";
	}
	else if(icon=="Clouds"){
		weatherIcon.src="img/clouds.png";
	}
	else if(icon=="Drizzle"){
		weatherIcon.src="img/drizzle.png";
	}
}


function fun()
{
	//alert("Hii");
	var city=document.querySelector('.search input').value;
	checkWeather(city);
	//alert(city);
}


//searchBtn.addEventListener('click',checkWether());
