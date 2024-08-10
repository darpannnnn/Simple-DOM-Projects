//bellow is the code for menu btn functioning
const body = document.querySelector('body')
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.querySelector('.dropdownMenu');

// Toggle the dropdown menu when the menu button is clicked
menuBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from bubbling up to the body
    dropdownMenu.classList.toggle('display');
});

// Close the dropdown menu when clicking anywhere outside of it
body.addEventListener('click', function() {
    if (dropdownMenu.classList.contains('display')) {
        dropdownMenu.classList.remove('display');
    }
});

//counter program

const decreaseBtn = document.querySelector('#decreaseBtn');
const resetValueBtn = document.querySelector('#resetValueBtn');
const increaseBtn = document.querySelector('#increaseBtn');
const value = document.querySelector('#value');
const resetPageBtn = document.querySelector('#resetPageBtn');
const startingValue = document.querySelector('.startingValue');
const submitStartValueBtn = document.querySelector('#submitStartValue');
const countByValue = document.querySelector('.countByValue');
const submitCountBtn = document.querySelector('#submitCount');
const btns = document.querySelector('.btns');

//reset page btn
resetPageBtn.addEventListener('click',function(){
    location.reload();
})

let count = 0;

submitStartValueBtn.addEventListener('click',function() {
    let startingVal = parseInt(startingValue.value);
    count = startingVal;
    value.textContent = count;
    this.disabled = true;
})
submitCountBtn.addEventListener('click',function() {
    let countByVal = parseInt(countByValue.value);
    
    btns.addEventListener('click',function(e){
        if(e.target === decreaseBtn || e.target.id === decreaseBtn){
            count -= countByVal;
        }else if(e.target === increaseBtn || e.target.id === increaseBtn){
            count += countByVal;
        }else{
            count = 0;
        }
        value.textContent = count;
        getCountColor();
    })
    
    function getCountColor(){
        if(count > 0){
            value.style.color = 'green';
        }else if(count < 0){
            value.style.color = 'red';
        }else if(count === 0){
            value.style.color = 'black';
        }
    }
    this.disabled = true;
})