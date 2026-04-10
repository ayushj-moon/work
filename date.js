let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let d1 = new Date("2026-09-02");

console.log(d1);

let d2 = new Date(2025, 0, 1); // (year, month, day)

// Months start with 0 (jan)
console.log(d2.toLocaleDateString());

// Get date parts

let date = new Date();

date.getFullYear();
date.getMonth();
date.getDate();
date.getHours();
date.getMinutes();
date.getSeconds();

console.log();

console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMonth());

// set date

let date1 = new Date();

date1.setFullYear(2030);
date1.setMonth(9);
date1.setDate(15);

date1.setHours(10);
date1.setMinutes(30);

console.log(date1.toDateString());

// date formatting

// default format

let da = new Date();

console.log(da.toString());
console.log(da.toDateString());
console.log(da.toTimeString());

let format = `${da.getDate()} - ${da.getMonth() + 1} - ${da.getFullYear()}`;

console.log();

console.log(format);

console.log(da.getDay());
