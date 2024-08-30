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

// Get references to the containers and all the draggable boxes
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const boxes = document.querySelectorAll('.box');

// Loop through each box to add event listeners for drag-and-drop functionality
for (let box of boxes) {
    // Add an event listener for the 'dragstart' event on each box
    box.addEventListener('dragstart', function(e) {
        let selected = e.target; // Store the currently dragged element in the 'selected' variable
        console.log(selected);
        

        // Add an event listener for the 'dragover' event on container2
        container2.addEventListener('dragover', function(e) {
            e.preventDefault(); // Prevent the default behavior to allow dropping
        });

        // Add an event listener for the 'drop' event on container2
        container2.addEventListener('drop', function(e) {
            container2.appendChild(selected); // Append the dragged element to container2
            selected = null; // Clear the 'selected' variable after the drop
        });

        // Add an event listener for the 'dragover' event on container1
        container1.addEventListener('dragover', function(e) {
            e.preventDefault(); // Prevent the default behavior to allow dropping
        });

        // Add an event listener for the 'drop' event on container1
        container1.addEventListener('drop', function(e) {
            container1.appendChild(selected); // Append the dragged element to container1
            selected = null; // Clear the 'selected' variable after the drop
        });
    });
}
