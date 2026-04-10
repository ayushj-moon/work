// let age = 17;

// if (age == 18){
//     console.log("the age is proper");
// }
// else{
//     console.log("age is not proper");
// }

// let marks = 75;

// if (marks > 89){
//     console.log("the marks is more then 89");
// }
// else if (marks < 89 && marks > 57){
//     console.log("the number is between marks 89 and 57");
// }
// else{
//     console.log("it doesnt belong to any number");
// }



// let day = 2;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;    
    
//     case 2:
//         console.log("Tuesday");
//         break;
    
//     default:
//         console.log("Invalid day");
// }   

// for (let i = 1;i<=5;i++){
//     console.log("loop is working");
//     if (i == 3){
//         console.log("out of loop");
//         break;  // break stop the execution of the loop
//     }
// }

// for(let i = 1;i<=5;i++){
//     if (i%2 == 0){
//         continue; //skip the current iteration
//     }
//     console.log("odd number : ",i);
// }

// practice 

// calculator

let num1 = 34;
let num2 = 56;

let option = 3;

switch(option){
    case 1:
        console.log("Addition : ",num1 + num2);
        break;
    case 2:
        console.log("Subtraction : ",num1 - num2);
        break;
    case 3:
        console.log("Division : ",num1/num2);
        break;
    default:
        console.log("Choose the valid option : ");  
}