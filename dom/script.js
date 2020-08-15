/*1.Select the section with an id of container without using querySelector .*/
document.getElementById("container");

/*2.Select the section with an id of container using querySelector .*/
document.querySelector("#container");

/*3. Select all of the list items with a class of "second".*/
document.querySelectorAll(".second");

/*4. Select a list item with a class of third, but only the list item inside of the ol tag.*/
document.querySelector("ol .third");

/*5. Give the section with an id of container the text "Hello!".*/
var section=document.querySelector("#container");
section.innerText="Hello!";

/*6. Add the class main to the div with a class of footer .*/
var footer=document.querySelector(".footer");
footer.classList.add("main");

/*7. Remove the class main on the div with a class of footer .*/
var footer=document.querySelector(".footer");
footer.classList.remove("main");

/*8. Create a new li element.*/
var newli=document.createElement("li");

/*9. Give the li the text "four".*/
newlist=innerText="four";

/*10.Append the li to the ul element*/
var listnew=document.querySelector("ul");
listnew.appendChild("newli");

/*11.Loop over all of the li s inside the ol tag and give them a background color of
"green".*/
var listol=document.querySelectorAll("ol li");
for (var i=0; i<listol.length; i++){
    listol[i].style.backgroundColor="green";
}

/*12.Remove the div with a class of footer .*/
var footer=document.querySelector(".footer");
footer.remove();