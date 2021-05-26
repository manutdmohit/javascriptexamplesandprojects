// let a, b;

// a = 5;
// b = 10;
// b = b - a;
// a = 2 * b;
// b = 2 * b - 3 * a;

(a = 5), (b = 10);

// [b, a] = [a, b];
[b, a] = [a, b];

console.log(a, b);
