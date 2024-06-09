
		//window.alert("Hii !"	);
		// Creating indiaClock()  funtion.
function indiaClock() {
	//document.querySelector("inner").style.backgroundImage="url('../img/ibg.png')";
	//creatinng Object of Date class;
	var dateTime = new Date();

	//getting hourrs, minutes & seconds by using functions of  date class. 
	var hours = dateTime.getHours();
	var minutes = dateTime.getMinutes();
	var seconds = dateTime.getSeconds();

	//calculating degree in hours, minutes & seconds.
	var angleInHours = (30 * hours) + (minutes / 2);
	var angleInMinutes = (6 * minutes) + (seconds / 10);
	var angleInSeconds = (6 * seconds);

	// rotating all niddel 
	document.getElementById("hr").style.transform = "rotate(" + angleInHours + "deg)";
	document.getElementById("min").style.transform = `rotate(${angleInMinutes}deg)`;
	document.getElementById("sec").style.transform = `rotate(${angleInSeconds}deg)`;

	//window.alert("In");

}

setInterval(()=>{
	indiaClock();
},1000)
indiaClock();
//Getting world time.


//alert(d);
function time(){
	//alert("time");
	var d= new Date();
india.innerHTML=d.toLocaleString('en-Us',
{
	timeZone:'Asia/Kolkata',
}).split(',')[1];
usa.innerHTML=d.toLocaleString('en-Us',
{
	timeZone:'America/New_york',
}).split(',')[1];
china.innerHTML=d.toLocaleString('en-Us',
{
	
	timeZone:'Asia/Shanghai',
}).split(',')[1];

london.innerHTML=d.toLocaleString('en-Us',
{
	timeZone:'Europe/London',
}).split(',')[1];

}
setInterval(()=>{
	time();
},1000)
time();

//  js of china clock.

		// Creating chinaClock()  funtion.
function chinaClock() {
	//alert("chin");
		//var c_time = d.toLocaleString('en-Us',{
			//timeZone:'America/New_york',
		//}).split(',')[1];
		//var c_hours = z(d.getHours());
		//var c_minutes = z(d.getMinutes());
		//var c_seconds = z(d.getSeconds());
		//alert(c_hours);
		
	function z(n){return (n<10?'0':'') + n}
	var d = new Date();
	//alert(d);
	var m=d.setMinutes(d.getMinutes() + d.getTimezoneOffset() + 480);
	//alert(m);
	var dateTime=z(d.getHours()) + ':' + z(d.getMinutes()) + ':' + z(d.getSeconds());
	//alert(dateTime);
	//alert(z(d.getHours()));

	//getting hourrs, minutes & seconds by using functions of  date class. 
		var c_hours = z(d.getHours());
		var c_minutes = z(d.getMinutes());
		var c_seconds = z(d.getSeconds());
		//alert(c_hours);
	//calculating degree in hours, minutes & seconds.
	var c_angleInHours = (30 * c_hours) + (c_minutes / 2);
	var c_angleInMinutes = (6 * c_minutes) + (c_seconds / 10);
	var c_angleInSeconds = (6 * c_seconds);
	//alert(c_angleInHours);
	//alert(c_angleInMinutes);
	//alert(c_angleInSeconds);
	
	// rotating all niddel 
	document.getElementById("chr").style.transform = "rotate(" + c_angleInHours + "deg)";
	document.getElementById("cmin").style.transform = `rotate(${c_angleInMinutes}deg)`;
	document.getElementById("csec").style.transform = `rotate(${c_angleInSeconds}deg)`;

	//window.alert("In");

}
setInterval(() => {
	chinaClock();
}, 1000)
chinaClock();


// js code of USA new york.

function usaClock() {
		
	function z(n){return (n<10?'0':'') + n}
	var d = new Date();
	//alert(d);
	var m=d.setMinutes(d.getMinutes() + d.getTimezoneOffset() + 480);
	//alert(m);
	var dateTime=z(d.getHours()) + ':' + z(d.getMinutes()) + ':' + z(d.getSeconds());
	//alert(dateTime);
	//alert(z(d.getHours()));

	//getting hourrs, minutes & seconds by using functions of  date class. 
		var us_hours = z(d.getHours());
		var us_minutes = z(d.getMinutes());
		var us_seconds = z(d.getSeconds());
		//alert(c_hours);
	//calculating degree in hours, minutes & seconds.
	var us_angleInHours = (30 * us_hours) + (us_minutes / 2);
	var us_angleInMinutes = (6 *us_minutes) + (us_seconds / 10);
	var us_angleInSeconds = (6 *us_seconds);
	//alert(c_angleInHours);
	//alert(c_angleInMinutes);
	//alert(c_angleInSeconds);
	
	// rotating all niddel 
	document.getElementById("ushr").style.transform = "rotate(" + us_angleInHours + "deg)";
	document.getElementById("usmin").style.transform = `rotate(${us_angleInMinutes}deg)`;
	document.getElementById("ussec").style.transform = `rotate(${us_angleInSeconds}deg)`;

	//window.alert("In");

}
setInterval(() => {
	usaClock();
}, 1000)
usaClock();


//js of London Clock


function londonClock() {
		
	function z(n){return (n<10?'0':'') + n}
	var d = new Date();
	//alert(d);
	var m=d.setMinutes(d.getMinutes() + d.getTimezoneOffset() + 780);
	//alert(m);
	var dateTime=z(d.getHours()) + ':' + z(d.getMinutes()) + ':' + z(d.getSeconds());
	//alert(dateTime);
	//alert(z(d.getHours()));

	//getting hourrs, minutes & seconds by using functions of  date class. 
		var l_hours = z(d.getHours());
		var l_minutes = z(d.getMinutes());
		var l_seconds = z(d.getSeconds());
		//alert(l_hours);
	//calculating degree in hours, minutes & seconds.
	var l_angleInHours = (30 * l_hours) + (l_minutes / 2);
	var l_angleInMinutes = (6 *l_minutes) + (l_seconds / 10);
	var l_angleInSeconds = (6 *l_seconds);
	//alert(l_angleInHours);
	//alert(l_angleInMinutes);
	//alert(l_angleInSeconds);
	
	// rotating all niddel 
	document.getElementById("lhr").style.transform = "rotate("+l_angleInHours+"deg)";
	document.getElementById("lmin").style.transform = `rotate(${l_angleInMinutes}deg)`;
	document.getElementById("lsec").style.transform = `rotate(${l_angleInSeconds}deg)`;

	//window.alert("In");

}
setInterval(() => {
	londonClock();
}, 1000)
londonClock();