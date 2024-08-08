//bellow is the code for menu btn functioning
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.querySelector('.dropdownMenu');

menuBtn.addEventListener('click',function() {
    dropdownMenu.classList.toggle('display');
});