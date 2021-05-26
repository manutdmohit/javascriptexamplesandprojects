// If the year is evenly divisible by 4, go to step 2. ...
// If the year is evenly divisible by 100, go to step 3. ...
// If the year is evenly divisible by 400, go to step 4. ...
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

// let year = 3996;
// debugger;

// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("The year " + year + " is a leap year");
//     } else {
//       console.log("The year " + year + " is not a leap year");
//     }
//   } else {
//     console.log("The year " + year + " is a leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }

// There are total 5 falsy values in javascript
// 0,"",undefined, null,NaN,false**

// if ((health = 0)) {
//   console.log("We win");
// } else {
//   console.log("We Loss");
// }

// if (false) {
//   console.log("Hello");
// } else {
//   console.log("Hi");
// }

// let age = 16;

// // age > 18 ? console.log("You can drink") : console.log("You cannot drink");
// console.log(age > 18 ? "You can drink" : "You cannot drink");

// let name = "Suraz";

// switch (name) {
//   case "Suraz":
//     console.log("The Name is Suraz");
//     break;
//   case "Mohit":
//     console.log("The Name is Mohit");
//     break;
//   case "Uttam":
//     console.log("The Name is Uttam");
//     break;
//   case "Sushant":
//     console.log("The Name is Suraz");
//     break;

//   default:
//     console.log("Please enter valid name");
// }

// let num = 1;

// while (num <= 10) {
//   console.log(num++);
// }

// let i = 1;

// for (let x = 8; x * i < 81; i++) {
//   debugger;
//   console.log(`${x} * ${i}=`, x * i);
// }

let x = 8;

for (let num = 1; num <= 10; num++) {
  debugger;
  console.log(`${x} * ${num}=`, x * num);
}

// for (let num = 1; num <= 10; num++) {
//   var tableOf = 9;
//   console.log(tableOf + "*" + num + "=" + tableOf * num);
//
// }
