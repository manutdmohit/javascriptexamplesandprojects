// function sum(num1) {
//   console.log(num1);
//   return function (num2) {
//     console.log(num2);
//     return function (num3) {
//       console.log(num3);
//       console.log(`The sum is ${num1 + num2 + num3}`);
//     };
//   };
// }

// sum(2)(3)(4);

// const sum = (num1) => (num2) => (num3) =>
//   console.log(`The sum is ${num1 + num2 + num3}`);

// sum(2)(3)(4);

//callback hell

setTimeout(() => {
  console.log("first");
  setTimeout(() => {
    console.log("second");
    setTimeout(() => {
      console.log("third");
      setTimeout(() => {
        console.log("fourth");
        setTimeout(() => {
          console.log("fifth");
          setTimeout(() => {
            console.log("sixth");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
