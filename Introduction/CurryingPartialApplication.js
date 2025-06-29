function mathsSum(x) {
  return function addition(y) {
    return x + y;
  };
}

let sum = mathsSum(5);
console.log(sum); //Function
console.log(sum(5)); // 10

function mathAny(x) {
  return function sum(y) {
    return function mul(z) {
      return function deb(f) {
        return function pty(r) {
          let sum = x + y + z + f + r;
          return `${x} + ${y} + ${z} + ${f} + ${r}: ` + sum;
        };
      };
    };
  };
}

console.log(mathAny(5)(6)(7)(4)(6));
