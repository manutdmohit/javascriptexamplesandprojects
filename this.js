// console.log(this);  window object

// let name = "Mohit";
// function myName() {
//   console.log(this.name);
// }
// myName();

// const obj = {
//   myAge: 26,
//   myName() {
//     console.log(this.myAge);
//   },
// };
// obj.myName();

let biodata = {
  myName: {
    realName: "Mohit Saud",
    channelName: "Learn Together",
  },
  myAge: 25,
  getData() {
    console.log(
      `My Name is ${this.myName.channelName} and my age is ${this.myAge}`
    );
  },
};

biodata.getData();
