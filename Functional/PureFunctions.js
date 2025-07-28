const PI = 3.14;

//! Exemplo de função IMPURA, uma vez que o PI está externo da função.
function circleArea(raio) {
  return raio * raio * PI;
}
console.log(circleArea(10));

//* Já neste exemplo, a função nao depende de NADA fora dela. Ou seja, uma função Pura
function circleAreaPure(raio, valuePI) {
  return raio * raio * valuePI;
}
console.log(circleAreaPure(10, 3.14));
