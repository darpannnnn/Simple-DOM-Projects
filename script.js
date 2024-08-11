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
