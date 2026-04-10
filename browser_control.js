// browser control

// window object 

// the main object of the browser

console.log(window);

// window.alert("hello");

// screen 
// gives the information about user screen

console.log(screen.width);
console.log(screen.height);

// location
// used to get or change the url

// console.log(location.href);

// location.href ="https://www.google.com/";

console.log(history.back());
console.log(history.forward());

console.log(navigator.userAgent);
console.log(navigator.language);

// popup methods

// alert("hello!");

let result = confirm("are you sure?");

if (result){
    console.log("User clicked okey");
}

let name = prompt("Enter your name : ");

console.log(name);

