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

//reset btn
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click',function(e){
    location.reload();
    e.stopImmediatePropagation();
}); 

//functioning of BMI calculator
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result =  document.getElementById('result');
    const resultTxt = document.getElementById('resultTxt');


    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please give a valid height';
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please give a valid weight';
    }
    else{
        const bmi = (weight / ((height ** 2)/ 10000)).toFixed(2);
        //to show the result
        result.innerHTML = bmi;
        if(bmi < 18.6){
            resultTxt.innerHTML = 'You are Under Weight';
        }
        if(bmi >= 18.6 && bmi <= 24.9){
            resultTxt.innerHTML = 'You are Healthy';
        }
        if(bmi > 24.9){
            resultTxt.innerHTML = 'You are Over Weight';
        }
    }
})
