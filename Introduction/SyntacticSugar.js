// Arrow Function
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length));

// Destructuring (Sintax)
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

// Spread Operator (…)
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
console.log(sum.apply(null, numbers));
