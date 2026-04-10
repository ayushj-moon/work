// let arr = [32,43,12,65];

// console.log(arr);
// console.log(arr.length);

// console.log(typeof arr);

// let marks = [32,21,67,54];
// let sum = 0;
// for(let i of marks){
//     sum += i;
// }
// console.log(sum)


// practice 1

// let stu = [32,12,75,64,34];

// let num = stu.length;
// let sum = 0;

// for (let i of stu){
//     sum += i;
// }

// let avg = sum/num;

// console.log("the average of student marks is : ",avg);

// practice 2

// let arr = [100,200,300,400,500];

// for (let i = 0;i<arr.length;i++){
//     arr[i] = arr[i] - (arr[i]*10)/100;
// }

// for(let i of arr){
//     console.log(i);
// }


// Array method

// push()

let arr = [1,2];
arr.push(3); // add element in array at last

// console.log(arr);

arr.pop(); // remove the last element in array

// console.log(arr);

arr.shift(); // remove the first element in array

// console.log(arr);

arr.unshift(0); // add at beginning of array

// console.log(arr);

arr.toString(); // to make array as a string

let arr1 = [2342,52354,23454];

let concatArray = arr.concat(arr1); // this method is used to join two or more array

// console.log(concatArray);

let arr2 = [332,34,23,64,12,13];

let sliceArray = arr2.slice(0,2); // return a new array with (start , end -1)

// console.log(sliceArray);

let arr3 = [23,34,54,65,76,87];

arr3.splice(2, 2 , 101 ,102); // affect the original array and used to add , remove and replace elements of array

// console.log(arr3);

let newArray = [1,2,3,4,5,6,7];

// splice for adding the element

newArray.splice(2,0,101);
console.log(newArray);

// splice for delete the element

newArray.splice(1,2,101,102);

console.log(newArray);






