// sync
// const fun1 = () => console.log("This is fun1");
// const fun2 = () => {
//   fun1();
//   console.log("This is fun2");
// };

// fun2();

// async
const fun1 = () => {
  console.log("Inside fun1 function");
  setTimeout(() => console.log("This is fun1"), 2000);
};

const fun2 = () => {
  console.log("Before calling fun1");
  fun1();
  console.log("After calling fun2");
};

fun2();
