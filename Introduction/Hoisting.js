catName("Chloe");

function catName(name) {
  console.log("O nome do meu gato é " + name);
}
/*
O resultado do código acima é: "O nome do meu gato é Chloe"
*/

console.log(num); // Retorna undefined
var num;
num = 6;

//Exemplo 1 - Não eleva (hoist)
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//Isso não funcionará, pois o JavaScript apenas eleva declarações

//Example 2 - Hoists
var num1 = 3; //Declara e inicializa num1
num2 = 4; //Inicializa num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declara num2 para hoisting

//Example 3 - Hoists
a = "Cran"; //Inicializa a
b = "berry"; //Inicializa b
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declara ambos a & b para hoisting
