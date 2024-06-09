console.log("Script Running")
document.querySelector('.cross').style.display ='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('.sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('.sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'nune'
    }
    else{
        document.querySelector('.ham').style.display = 'nune'
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
    }
})