console.log("" == 0); // True
console.log([] == false); // True
console.log([] == ![]); // True
console.log(1 == "1"); // True

// Use Strict Equality
console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false

"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true

"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true

const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true

let value = 5;
console.log(value, typeof value);

value = "5";
console.log(value, typeof value);

value = {};
console.log(value, typeof value);

value = [];
console.log(value, typeof value);
