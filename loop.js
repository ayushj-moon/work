// factorial

// let input = prompt("Enter the number : ");
// let num = Number(input);
// let fact = 1;

// for (let i = 1;i<=num;i++){
//     fact = fact * i;
// }

// document.getElementById("demo").innerHTML = `the factorial of ${num} is ${fact}`;

const cars = ["BMW", "Volvo", "Saab", "Ford"];
const len = cars.length;

// for (let i = 0;i<len;i++){
//     console.log("the car : ",cars[i]);
// }

// let i = 0;
// while(i<len){
//     console.log("the cars : ",cars[i]);
//     i++;
// }

// let i = 0;
// do{
//     console.log("the cars : ",cars[i]);
//     i++;
// }while(i<len);

// for - of loop is used in string and arrays
// for - in loop is used in objects


// let size = 0;

// for (let val of cars){
//     console.log("the cars : ",val);
//     size++;
// }

// console.log("the size of array is :",size);

// let

// for (let i = 1;i<100;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// guessing game

// let randomNumber = Math.floor(Math.random() * 11);
// let steps = 0;

// while(true){
//     let input = prompt("Enter the number : ");
//     let num = Number(input);
    
//     if (num === randomNumber){
//         console.log(`You won in ${steps}`);
//         break;
//     }
//     else if(num > randomNumber) {
//         console.log("Guess a number smaller then this");
//     }
//     else{
//         console.log("Guess a number greater then this");
//     }
//     steps++;
// }

let obj = {
    fname:"Ayush",
    password:23423
}

// key and value
for (let key in obj){
    console.log("Key :",key, "value :",obj[key]); 
}



