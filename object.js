//  this are the ways of making a object

const car = {
    type: 'fiat',
    model: '500',
    color: "white"
};

const person = {};

person.firstName = "Ayush";
person.lastName = "Jakhmola";
person.age = 50;
person.eyecolor = "blue";

// console.log(person);

const per = new Object({
    type: 'Fiat',
    model: '500',
    color: "white"
});

// -- Object property notation (Accessing js properties)

// -> Dot notation

// objectName.propertyName
// person.firstName;

// -> Bracket notation

// objectName["propertyName"]
// person["first"];

// -- js object methods

const per1 = {
    fName: "Ayush",
    lastName: "Doe",
    age: 50,
    fullName: function () {
        return this.fName + " " + this.lastName;
    }
}

// console.log(per1.fullName());

// ** Objects are always declared in const and there properties are key and value

// ** this returns to current object 


let n1 = "fName";
let n2 = "lastName";

let name = person[n1] + " " + person[n2];

// we can update the property of key 

person.age = 10;

// adding new properties

person.nationality = "India";

// Deleting the properties

delete person.age;
delete person["age"];

// checking if property Exists

let result = ("firstName" in person);

// console.log(result);


// Nested Objects

const myObj = {
    name: "Ayush",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

// console.log(myObj);


// Accessing elements of nested objects

// console.log(myObj.myCars.car2);
// console.log(myObj.myCars["car1"]);
// console.log(myObj["myCars"]["car1"]);

// Object Methods :
// Methods are the functions stored as property values

// this keyword
// this refers to the objects.
// this keyword makes it possible to use the same method with different objects 


const A = {
    a: 234,
    b: 23432,
    c: 235434523,
    getId: function () {
        return this.a;
    }
};

let number = person.getId;

// Accessing object methods

// objectName.methodName():


// Displaying the object

let per4 = {
    name: "John",
    age: 30,
    city: "New York"
}


let text = per4.name + "," + per4.age + "," + per4.city;

console.log(text);

let txt = "";
for (let x in per4) {
    txt = txt + per4[x] + " ";
}

console.log(txt);


