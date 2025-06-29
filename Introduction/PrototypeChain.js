// Herança com o encadeamento de protótipos
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f(); // {a: 1, b: 2}

f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a); // 1
console.log(o.b); // 2
console.log(o.c); // 4
console.log(o.d); // undefined

// Herança de "métodos"
var om = {
  a: 2,
  m: function (b) {
    return this.a + 1;
  },
};

console.log(om.m()); // 3
var p = Object.create(om);
p.a = 12; // cria uma propriedade 'a' no objeto 'p'
console.log(p.m()); // 13
