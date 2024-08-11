//bellow is the code for menu btn functioning
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.querySelector('.dropdownMenu');
const body = document.querySelector('body');

menuBtn.addEventListener('click',function() {
    dropdownMenu.classList.toggle('display');
});

// Close the dropdown menu when clicking anywhere outside of it
body.addEventListener('click', function() {
    if (dropdownMenu.classList.contains('display')) {
        dropdownMenu.classList.remove('display');
    }
});

//digital clock functioning
const clock = document.getElementById('time');

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);
