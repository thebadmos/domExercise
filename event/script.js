/*1.Add the necessary code to wait for the DOM to load to make sure that
anything you manipulate in the DOM has loaded. You can do this either using
window.onload or adding an event listener for DOMContentLoaded .*/
document.addEventListener('DOMContentLoaded', function(){

/*2. Replace the text "Change me" with "Hello World!".*/
document.addEventListener('DOMContentLoaded', function(){
    var header = document.getElementById('change_heading');
    header.innerText="Hello World!";

/*3. When a user hovers over one of the colored boxes change the text to display
the color that is being hovered over.*/
var colored = document.querySelectorAll('section div');
    var display = document.querySelector('.selected');

    for(i = 0; i < coloredBoxes.length; i++){
        colored[i].addEventListener('mouseover', (e) => {
            display.innerText = e.target.classList;
        });
    };

/*4. Create a new div element.*/
var divNew= document.createElement("div");

/*5. Give your new div a class of purple and style it so that it has a background
color of purple.*/
divNew.classList.add('purple');
    divNew.style['backgroundColor'] = 'purple';

/*6. Append your new div to the page to the section tag.*/
section.appendChild(newDiv);