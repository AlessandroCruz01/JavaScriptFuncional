# JavaScript Funcional

## Introduction

- ### Paradigmas

_Um paradigma de programação é um estilo ou abordagem fundamental para conceituar e estruturar a criação de programas de computador. É uma forma de pensar sobre como um problema será resolvido utilizando código, com foco em como a execução do programa ocorrerá._

![historyParadigm](https://miro.medium.com/v2/resize:fit:1400/1*FFOmWawwaBGQi4hHE-sn6A.png)

_Em outras palavras, um paradigma de programação define a maneira como os desenvolvedores organizam seu código, como interagem com o computador e como resolvem problemas usando diferentes linguagens e ferramentas._
_Existem diversos paradigmas de programação, cada um com suas características e vantagens:_

- **Imperativo:**

  - _O programador especifica exatamente como o programa deve realizar as tarefas, passo a passo, alterando o estado do programa com comandos sequenciais._

    - Exemplo de Linguagem: **Linguagem C**
    - Exemplo de código: **Somar os números de 1 a 5**

      ```c
          #include <stdio.h>

          int main() {
              int soma = 0;
              for (int i = 1; i <= 5; i++) {
                  soma += i;
              }
              printf("Soma: %d\n", soma);
              return 0;
          }
      ```

- **Declarativo:**

  - _O programador descreve o que o programa deve fazer, sem especificar como fazê-lo, deixando essa tarefa para a linguagem ou ambiente de execução._
    - Exemplo de Linguagem: **SQL**
    - Exemplo de código: **Selecionar todos os clientes do Brasil:**
      ```sql
          SELECT * FROM clientes WHERE pais = 'Brasil';
      ```

- **Orientado a Objetos (OO):**

  - _Aborda a resolução de problemas por meio da criação de objetos, que encapsulam dados e comportamentos, facilitando a organização e reutilização do código._

    - Exemplo de Linguagem: **Java**
    - Exemplo de código: **Classe Pessoa com método apresentar():**

      ```java
      class Pessoa {
          String nome;

          Pessoa(String nome) {
              this.nome = nome;
          }

          void apresentar() {
              System.out.println("Olá, meu nome é " + nome);
          }
      }

      public class Main {
          public static void main(String[] args) {
              Pessoa p = new Pessoa("Alessandro");
              p.apresentar();
          }
      }
      ```

- **Funcional:**

  - _Utiliza funções como unidades básicas de construção, focando em avaliar expressões e funções, e promovendo imutabilidade e efeitos colaterais reduzidos._

    - Exemplo de Linguagem: **Haskell (ou JavaScript com funções puras)**
    - Exemplo de código: **Somar os quadrados de 1 a 5**

      ```javascript
      const numeros = [1, 2, 3, 4, 5];
      const somaDosQuadrados = numeros
        .map((n) => n * n)
        .reduce((acc, val) => acc + val, 0);

      console.log(somaDosQuadrados); // 55
      ```

- **Lógico:**

  - _Baseado em lógica matemática, onde o programa é visto como um conjunto de regras e fatos, e a execução é feita através de mecanismos de inferência._

    - Exemplo de Linguagem: **Prolog**
    - Exemplo de código: **Definir relação de pai**

      ```java
          pai(joao, maria).
          pai(joao, jose).

          filho(X, Y) :- pai(Y, X).
      ```

- **Orientado a Eventos:**

  - _O fluxo do programa é determinado por eventos, como cliques do mouse ou toques na tela, muito usado em interfaces gráficas._
    - Exemplo de Linguagem: **JavaScript (em páginas web)**
    - Exemplo de código: **Mostrar alerta ao clicar em botão**
      ```html
      <button onclick="alert('Você clicou!')">Clique aqui</button>
      ```

- ### Sobre o JavaScript

  _O **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** é uma linguagem de programação multi-paradigma, ou seja, aceita diversos tipos de paradigmas. Podemos escrever códigos javasScript com paradigma funcional, OO, Procedural e até mesmo orientado a eventos (no caso da programação Web)._

  - **História e Origem do JavaScript**
    _O JavaScript foi criado por **Brendan Eich** em apenas 10 dias em 1995, na Netscape. Inicialmente era chamado de **Mocha**, depois **LiveScript**, e finalmente **JavaScript** (nome escolhido por marketing, por causa do "hype" em cima do Java na época). Originalmente foi criado apenas para rodar no navegador._
    _Padronizado pela **ECMA International** com o nome oficial de **ECMAScript** o JavaScript teve sua primeira versão da especificação como **ECMAScript 1 (1997)**._
    _Por muitos anos, o JavaScript ficou estagnado, porém a evolução veio com:_ - **ECMAScript 5 (2009):** **`strict mode`, `JSON`, `Array.prototype.forEach`, etc.** - **ECMAScript 6 (2015):** **`let`/`const`, arrow functions, classes, modules, promises, etc.** - _Desde então, o javaScript passou a lançar uma nova versão por ano. Ou seja: **(ES2016, ES2017, etc.)**._

  - **Características Profundas da Linguagem:**
    Como foi citado anteriormente, o JavaScript é multi-paradigma, ou seja, suporta:

    - Imperativo
    - Funcional
    - Orientado a Objetos
    - Orientado a Eventos
    - Assíncrono (Callbacks, Promises, Async/Await)

    O JavaScript tem uma tipagem dinâmica e fraca, variáveis podem ter novos tipos **atribuídos em tempo de execução**. Ou seja, podem ocorrer bugs sutis por conta de possíveis **coerções implícitas**.

    ```javascript
        '' == 0 // true 😵
        [] == false // true
        [] == ![] // true
    ```

    Para evitar os problemas acima é necessário usar sempre o **Strict Equality `===`** que serve para validar tanto o valor e tipo.

    [DynamicTyping.js](./Introduction/DynamicTyping.js)

  - **Baseado em protótipos:**

    - No JavaScript nao existem classes reais de verdade (até o **ES6** introduzir o **[syntactic sugar](https://medium.com/@teamtechsis/syntactic-sugar-and-modern-javascript-b0293ff28311)**), em português seria algo como _açúcar sintático_ é um termo usado para se referir a construções na linguagem de programação que tornam o código mais fácil de ler e escrever, sem adicionar funcionalidades.

      - **Exemplos:**

        - **[Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) :**
          ```javascript
          const arr = [1, 2, 3, 4, 5];
          const doubled = arr.map((num) => num * 2);
          console.log(doubled); // [2, 4, 6, 8, 10]
          ```
        - **[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring):**

          ```javascript
          const arr = [1, 2, 3, 4, 5];
          const [first, second] = arr;

          const user = {
            id: 10001,
            name: "Sam",
            email: "sam74@gmail.com",
          };
          const { name } = user;
          console.log(name); // Sam
          ```

        - **[Spread Operator (…)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)**

          ```javascript
          function sum(x, y, z) {
            return x + y + z;
          }

          const numbers = [1, 2, 3];

          console.log(sum(...numbers));
          // Expected output: 6

          console.log(sum.apply(null, numbers));
          // Expected output: 6
          ```

    - Todo objeto herda de outro objeto via **[prototype chain](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)**, que é o mecanismo que permite aos objetos herdar propriedades e métodos de outros objetos, através de um encadeamento de referências. JavaScript é um pouco confuso para desenvolvedores com experiência em linguagens baseadas em classes (como Java ou C++), porque é dinâmico e não dispõe de uma implementação de uma class (a palavra-chave class foi introduzida no ES2015, mas é syntax sugar, o JavaScript permanece baseado em prototype).

      - **Herança com o encadeamento de protótipos:**
        Objetos em JavaScript são "sacos" dinâmicos de propriedades (a que se refere as próprias propriedades) e cada um tem um link para um objeto prototype. Eis o que acontece quando se tenta acessar uma propriedade:
        ```javascript
        let f = function () {
          this.a = 1;
          this.b = 2;
        };
        let o = new f(); // {a: 1, b: 2}
        ```
      - **Herança de "métodos"**
        JavaScript não tem "métodos" como os que conhecemos em linguagens baseadas em classes. Em JavaScript, qualquer função pode ser adicionada em um objeto em forma de propriedade. Uma herança de funções age como a herança de quaisquer outras propriedades que não sejam funções, e podemos inclusive realizar sobre-escrita de função (method overriding)!

        ```javascript
        function Pessoa(nome) {
          this.nome = nome;
        }

        Pessoa.prototype.apresentar = function () {
          console.log(`Olá, sou ${this.nome}`);
        };

        const joao = new Pessoa("João");
        joao.apresentar();
        ```
