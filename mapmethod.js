// const names = ["mohit", "suraj", "sushant", "keshav"];

// const newnames = names.map((name, index) => {
//   return index + ": " + name;
// });

// console.log(newnames);

// const datas = [
//   { id: 1, name: "mohit", favclub: "manchester united" },
//   { id: 2, name: "suraz", favclub: "barcelona" },
//   { id: 3, name: "anil", favclub: "arsenal" },
// ];

// const newdatas = datas.map((data) => {
//   return `My name is ${data.name}`;
// });

// console.log(newdatas);

// 4/13/2021

// const foods = ["momo", "pizza", "paneer", "burger", "sausage"];

// const newfoods = foods.map((food, index) => {
//   return `Food ${index} : ${food}`;
// });

// console.log(newfoods);

const info = [
  { name: "mohit", rollno: 4, address: "tikapur" },
  { name: "rahul", rollno: 5, address: "london" },
  { name: "arjun", rollno: 6, address: "paris" },
];

const newinfo = info.map((data) => {
  // return `I am ${data.name}`;
  // return ` My roll number is ${data.rollno}`;
  return `I live in ${data.address}`;
});

console.log(newinfo);
