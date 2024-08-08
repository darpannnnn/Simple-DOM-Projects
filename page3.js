//bellow is the code for menu btn functioning
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.querySelector('.dropdownMenu');

menuBtn.addEventListener('click',function() {
    dropdownMenu.classList.toggle('display');
});

//digital clock functioning
const clock = document.getElementById('time');

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);