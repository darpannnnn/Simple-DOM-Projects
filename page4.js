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

//play again btn
const playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click',function(){
    location.reload();
})

//functioning of the game
const container = document.querySelector('.gameBox');
const checkBtn = document.querySelector('#check');
const hideNum = document.querySelector('.hideNum');
const msg = document.querySelector('.msg');
const userInput = document.querySelector('#userInput');
const scoreVal = document.querySelector('.score');
const highScoreVal = document.querySelector('.highScore');


//generate randeom number
let randomNumber = parseInt(Math.random() * 100 + 1);
let score = 20;
let highScore = 0;


//event to check the number
checkBtn.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(typeof guess);

    //check conditions
    if(guess){
        if(guess < 1 || guess > 100){
            msg.textContent = `Please enter number between 1-100`;
        }

        if(guess > randomNumber){
            msg.textContent = `Too high`;
            userInput.value = '';
        }
        if(guess < randomNumber){
            msg.textContent = `Too low`;
            userInput.value = '';
        }

        if(guess !== randomNumber){
            if(score > 1){
                score--;
                scoreVal.textContent = score;
            }
            
            else{
                msg.textContent = `You've lossed the game`;
                scoreVal.textContent = 0;
            }
        }

        if(guess === randomNumber){
            msg.textContent = `Congrats you guessed it right!`;
            msg.style.color = 'green';
            hideNum.textContent = randomNumber;
            hideNum.style.color = 'white';
        }

    } 
    else{
        msg.textContent = `Please enter a valid number`;
    }
    
})

