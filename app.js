console.log("hello world");

let firstName = "Ayush";
let isfollow = false;

const obj = {
    fname: "Ayush",
    age: 21,
}

obj["age"]++;
console.log(obj["age"]);

// operators

// 
// let a = 5;
// let b = 2;

// console.log("a = ",a ," & b = ",b);
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a ** b = ",a**b);

//Assignment operators
let a = 5;
let b = 4;

a += 4;
a -= 2;
console.log(a);


// this are the way to o/p 

document.getElementById("demo").innerHTML = "this is me";

document.write("hello world");

// alert("hello world");

console.log("this is me");

// Hoisting

function fun1() {

    let userName = "ayush";

    function fun2() {
        let lastName = "jakhmola";

        console.log(userName + " " + lastName);
    }

    fun2();

    console.log(userName);
}

fun1();

// Data types

let str = "Ayush";
let num = 2343;
let isPresent = false;
let ud = undefined;
let n = null;
let ob = {
    fname: "rahul",
    roll: 34,
}
let arr1 = [32, 35, 65, 74];

// type conversion

let str1 = "Ayush";

let str3 = str + 2345;

console.log(str3);


