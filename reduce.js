const arr = [
  [12, 13],
  [14, 15],
  [16, 17],
  [18, 19],
  [20, [21, 22]],
];

// let flatArr = arr.reduce((accum, currVal) => {
//   return accum.concat(currVal);
// });
// console.log(arr.flat());
const newArr = arr.flat(Infinity);
console.log(newArr);
