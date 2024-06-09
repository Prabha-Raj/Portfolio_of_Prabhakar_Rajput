//window.alert("Hii !");
// Creating analogClock()  funtion.
function analogClock(){
	
	//creatinng Object of Date class;
	var dateTime = new Date();
	
	//getting hourrs, minutes & seconds by using functions of  date class. 
	var hours = dateTime.getHours();
	var minutes = dateTime.getMinutes();
	var seconds = dateTime.getSeconds();
	
	//calculating degree in hours, minutes & seconds.
	var angleInHours = (30*hours)+(minutes/2);
	var angleInMinutes = (6*minutes)+(seconds/10);
	var angleInSeconds = (6*seconds);
	
	// rotating all niddel 
	document.getElementById("hr").style.transform="rotate("+angleInHours+"deg)";
	document.getElementById("min").style.transform=`rotate(${angleInMinutes}deg)`;
	document.getElementById("sec").style.transform=`rotate(${angleInSeconds}deg)`;
	
	//window.alert("In");
	
}
setInterval(()=>{
	analogClock();
},1000)
analogClock();