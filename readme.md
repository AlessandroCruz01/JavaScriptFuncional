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

  - **Declarativo x Imperativo:**
    A diferença entre **declarativo** e **imperativo** é fundamental para quem quer dominar o JavaScript, entender quando e porque usar um ou outro é um dos marcos de quem sai do nível intermediário para o avançado.

    - **Imperativo:**
      Precisa de **máximo controle** da execução, é a base da programação procedural e orientado a objetos, seria algo como descrever detalhadamente o passo a passo para um funcionário ir pagar uma conta, ou seja, cada passo a passo precisa ser detalhadamente indicado.
      Por exemplo:

      ```javascript
      const numeros = [1, 2, 3, 4, 5, 6];
      let soma = 0;

      for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
          soma += numeros[i] * numeros[i];
        }
      }

      console.log(soma); // 56
      ```

    - **Declarativo:**
      É um código que requer mais clareza e legibilidade, ou seja, não requer os detalhes de como a tarefa será executada por baixo dos panos, levando em consideração e exemplo anterior, seria algo como pedir para o mesmo funcionário ir pagar a mesma conta, porém, sem precisar indicar os detalhes como no caso anterior.
      Por Exemplo:

      ```javascript
      const numeros = [1, 2, 3, 4, 5, 6];

      const soma = numeros
        .filter((n) => n % 2 === 0)
        .map((n) => n * n)
        .reduce((acc, n) => acc + n, 0);

      console.log(soma); // 56
      ```

    - **Combo: Misturando os dois:**
      O javaScript permite misturar ambos, O segredo é saber **quando abstrair (declarativo)** ou quando **controlar (imperativo)**

      ```javascript
      function processarNumeros(numeros) {
        if (!Array.isArray(numeros)) return 0; // Imperativo

        return numeros // Declarativo
          .filter((n) => n % 2 === 0)
          .map((n) => n * n)
          .reduce((acc, val) => acc + val, 0);
      }
      ```

      ![Declarativo X Imperativo](https://media.licdn.com/dms/image/v2/C4E12AQEcG8InMSroFg/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1602860388222?e=1756339200&v=beta&t=xhS0DUUK-tYzr9EKZoqjxu64RcsFHcelzufq5ZTMHvg)

  - **Como funciona o JavaScript**
    O JavaScript funciona em um ambiente **single-threaded**, com uma única **pilha de execução (stack)** onde os comandos são empilhados e executados um por um. Apesar de ser single-thread o javaScript permite a execução de forma assíncrona (como `setTimeOut`, `fetch` ou `event listener`) é chamada, ela é delegada ao navegador (ou ao Node.js) e, ao ser concluída, sua **callback** vai para o **event queue**. O **Event Loop** fica monitorando constantemente se a stack está vazia, quando estiver, ele pega a próxima tarefa do event queue e empilha para execução. Enquanto isso, objetos e dados do programa ficam armazenados na **heap**, uma área de memória dinâmica usada para armazenar valores complexos (como objetos e Arrays). Esse modelo permite que o JS seja não-bloqueante e reativo, mesmo com apenas uma única thread.

    ![process Js](https://miro.medium.com/v2/resize:fit:882/1*cvU93uPLNe69rPHSsu1SIw.png)

    - **Heap**: _Área de memória onde armazena as informações._
    - **Stack**: _Pilha de execução (Single Thread) - Só pode ter uma única execução ativa._
    - **Event Queue**: _Fila de eventos (para executar depois) -> Joga para a stack._
    - **Event Loop**: _Fica monitorando a event queue._

    ![ProcessJs](https://miro.medium.com/v2/1*4lHHyfEhVB0LnQ3HlhSs8g.png)

    - **Para testar o processo de forma visual: [Loupe](https://latentflip.com/loupe)**

- ### Conceitos avançados do JavaScript

  - **Closure**
    Uma [text](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures) é uma combinação de uma função com as referências ao estado que a circunda (o **ambiente léxico**).Em outras palavras, uma closure lhe dá acesso ao escopo da função externa a partir da função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

    ```javascript
    function makeAdder(x) {
      return function (y) {
        return x + y;
      };
    }

    var add5 = makeAdder(5);

    console.log(add5); // Function
    console.log(typeof add5); // Function

    var add10 = makeAdder(10)(10);
    console.log(add10); // 20
    ```

  - **Hoisting**
    O [Hoisting](https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting) ou içamento, em português, é um termo que você não encontrará em nenhuma especificação normativa antes de 2015. O hoisting foi pensado como uma maneira geral de pensar sobre os contextos de execução (especificamente as fases de criação e execução) funcionam em JavaScript. No entanto o conceito pode ser um pouco confuso.

    ![Hoisting](https://miro.medium.com/v2/resize:fit:1400/0*wtjm4eeGFd9Wc_Qz)

    Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente **movidas para o topo do código**, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são deslocadas **na memória** durante a **fase de compilação**, mas **permanecem exatamente onde as digitou** no seu código.

    ```javascript
    catName("Chloe");

    function catName(name) {
      console.log("O nome do meu gato é " + name);
    }
    ```

    Uma observação importante, **apenas declarações são hoisted**, ou seja, o JavaScript apenas eleva as declarações e não as inicializações. Se uma variável for declarada e inicializada após usá-la, o valor será retornado undefined. Por exemplo:

    ```javascript
    console.log(num); // Retorna undefined
    var num;
    num = 6;
    ```

  - **Coerção de Tipos e "truthy / falsy"**
    Tudo em JavaScript tem um valor de verdade:

    ```javascript
    console.log(!!0);
    console.log(!!"");
    console.log(!![]);
    console.log(!!null);
    console.log(!!undefined);
    console.log(!!{});
    ```

  - **Currying, Partial Application**
    É basicamente o processo de transformar uma função com vários argumentos na mesma função com menos argumentos. Ou seja, você pode passar todos os argumentos que uma função está esperando e obter o resultado, ou passar um subconjunto desses argumentos e recuperar uma função que aguarda o resto dos argumentos.

    ```javascript
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
    ```

  - **Object Descriptors**
    O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.
    `Object.defineProperty(obj, prop, descriptor)`
    Parâmetros:

    - `obj`:
      O objeto no qual será definida a propriedade.
    - `prop`:
      O nome da propriedade que será definida ou modificada.
    - `descriptor`:
      O descritor para a propriedade que será definida ou modificada.

    ```javascript
    const obj = {};
    Object.defineProperty(obj, "secreto", {
      value: 42,
      writable: true,
      configurable: false,
      enumerable: false,
    });

    console.log(obj.secreto);
    ```
