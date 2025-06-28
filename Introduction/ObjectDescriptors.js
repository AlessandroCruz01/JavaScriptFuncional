const obj = {};
Object.defineProperty(obj, "secreto", {
  value: 42,
  writable: true,
  configurable: false,
  enumerable: false,
});

console.log(obj.secreto);

obj.secreto = 55;

console.log(obj.secreto);
