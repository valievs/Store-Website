let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
let header = document.querySelector('.header-2')

menuBar.addEventListener('click', ()=>{
    menuBar.classList.toggle('fa-times')
    navBar.classList.toggle('active')
})

window.onscroll = ()=>{
    menuBar.classList.remove('fa-times')
    navBar.classList.remove('active')

    if(window.scrollY > 150){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

let countDate = new Date('october 26, 2022 00:00:00').getTime();

function count(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap %(minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
count();

},1000)
