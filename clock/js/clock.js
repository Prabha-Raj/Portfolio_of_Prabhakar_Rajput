function clock(){
var d= new Date();
var h= d.getHours();
var m= d.getMinutes();
var s= d.getSeconds();
var s_angle=6*s+m/2;
var m_angle=6*m;
var h_angle=30*h;
hr.style.transform="rotate("+h_angle+"deg)";
min.style.transform="rotate("+m_angle+"deg)";
sec.style.transform=`rotate(${s_angle}deg)`;
//replace of concatination. by using` `backtick.
}

setInterval(()=>{
clock();
},1000)
clock();
