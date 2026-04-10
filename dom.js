// Dom is a tree structure of html page.

// browser convert html into objects so js can:

// 1.read content
// 2.change Format
// 3.add / remove elements

// Selecting Elements

let el = document.getElementById("demo");

let items = document.getElementsByClassName("item");

let p = document.getElementsByTagName("p");

let ele = document.querySelector(".item");

let els = document.querySelectorAll(".item");

document.getElementById("demo").innerHTML = "Hello JS";

let dom = document.querySelector(".item").style.color = "red";

// creating elements 

let newE1 = document.createElement("p");
newE1.innerHTML = "New Paragraph";                  

document.body.appendChild(newE1);

// deleting elements

let delE1 = document.querySelector("p");
delE1.remove();

