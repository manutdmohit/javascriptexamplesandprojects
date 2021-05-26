// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

//     for (let friend in friends) {
//   console.log(friend);
// }

// for in loop shows index number of elements

// for (let friend of friends) {
//   console.log(friend);
// }

// friends.forEach((element, index, array) => {
//   console.log(element);
// });

// Output of this :
// let friends = ["Ram", "Shyam", "Hari", "Sita"];
// console.log(friends.indexOf("shyam"));
// -1

// let friends = ["suraz", "surazkc", "suraz", "sagar"];
// console.log(friends.lastIndexOf("suraz"));
// console.log(friends.lastIndexOf("suraz", 1));
// 2
// 0
// console.log(friends.includes("uttam")); //false
// console.log(friends.includes("suraz")); //true

// const prices = [200, 300, 400, 500, 600];

// const findElem = prices.find((currVal) => {
//   return currVal < 400;
// });
// 200
// findElem return currVal>1400
// undefined

// const findElem = prices.findIndex((currVal) => {
//   return currVal < 400;
// });

// findIndex return currVal>1400
// -1
// console.log(findElem);
// 0

// const prices = [200, 300, 400, 500, 600];

// const values = prices.filter((currValue) => {
//   return currValue < 400;
// });

// console.log(values);
// [200, 300];

// return currValue>1400
// []

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.push(41, 11));
// 7
// push and shift return length of new array
// 7
// console.log(numbers.unshift(41, 11));

// console.log(numbers);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.sort();
// console.log(fruits.reverse());

const months = ["Jan", "March", "April", "June", "July"];
// months.push("Dec");
// console.log(months);
// months.splice(months.length, 0, "Dec");
// console.log(months.splice(months.length, 0, "Dec"));
// months.splice(1, 1, "march");
// console.log(months);

// const indexOfMonth = months.indexOf("June");
// console.log(indexOfMonth);

// if (indexOfMonth != 1) {
//   const deleteMonth = months.splice(indexOfMonth, 1);
//   console.log(months);
//   console.log(deleteMonth);
// } else {
//   console.log("Month not found");
// }

// const array = [1, 4, 9, 16, 25];
// // array.forEach((element) => {
// //   console.log(element);
// // });

// array.map((element) => {
//   console.log(element);
// });

// The main difference between foreach and map method is map method returns new array without affecting old array and foreach returns undefined

// const array = [1, 4, 9, 16, 25];
// const newarray = array.forEach((element) => {
//   console.log(element);
// });
// console.log(newarray);

// const array = [1, 4, 9, 16, 25];
// const newarray = array.map((element) => {
//   console.log(element);
// });
// console.log(newarray);

// let arr = [25, 36, 49, 64, 81];
// const newarr = arr.map((element) => Math.sqrt(element);
// );
// console.log(newarr);
// console.log(arr);
// console.log(newarr);*
// let arr = [2, 3, 4, 6, 8];
// let newarr = arr
//   .map((element) => {
//     return element * 2;
//   })
//   .filter((value) => {
//     return value > 10;
//   });

// let newestarr = newarr.filter((value) => {
//   return value > 10;
// });
// console.log(newarr);
// console.log(newestarr)

// let arr = [2, 3, 4, 6, 8];
// let newarr = arr
//   .map((element) => element * 2)
//   .filter((value) => value > 10)
//   .reduce((accumulator, currVal, index, arr) => {
//     return (accumulator += currVal);
//   });

// console.log(newarr);

// let arr = [2, 3, 4, 6, 8];
// let newarr = arr.reduce((accumulator, currValue, index, arr) => {
//   return (accumulator += currValue);
// }, 7);

// console.log(newarr);

//tttelegram
// const items = [95, 262, 2015, 2009];
// const noop = (v alue) => value;

// for (var i = 0; i < items.length; i++) {
//   noop(items[i]);
// }

// const result = i;
// console.log(result);

// let myTweet = "Hi, Good Morning, This is your friend Mohit";

// console.log(myTweet.length);
// let tweet = myTweet.slice(0, 2);
// console.log(tweet);
// console.log(tweet.length);

// let str = "hello";
// let output = str.split("").reverse().join();
// console.log(output);

// console.log(Math.floor(Math.random() * 10));

//alert(location.href)
// if (confirm("want to visit facebook")) {
// window.location.back();
//   location.href = "https://www.facebook.com/";
// }
