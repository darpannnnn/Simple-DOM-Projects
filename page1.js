const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.querySelector('.dropdownMenu');
const resetBtn = document.getElementById('resetBtn');
const body = document.querySelector('body');
const canvas = document.getElementById('canvas');
const rotateArrow = document.getElementById('rotate');

//bellow is the code for menu btn functioning
menuBtn.addEventListener('click',function(event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('display');
});

body.addEventListener('click', function() {
    if (dropdownMenu.classList.contains('display')) {
        dropdownMenu.classList.remove('display');
    }
});

//bellow is the code for reset btn
rotateArrow.classList.toggle('animate');
resetBtn.addEventListener('click',function(){
    location.reload();
}); 


canvas.addEventListener('click',function(e) {
    if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'lightskyblue'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
    }
})
