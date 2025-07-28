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

## Paradigms

Como ja indicamos anteriormente, o JavaScript é multi-paradigma. Ou seja, aceita diferentes tipos de paradigmas, nesse contexto vamos focar nas duas principais, POO e Funcional que será o foco deste curso.

- ### JavaScript Orientado a Objetos

  A orientação a objetos ja deve ser um conceito sólido antes de praticar os próximos tópicos. Vamos diretamente aos pilares:

  - **Classe (Class)**
    Uma **classe** é um molde para criar objetos. Em javaScript, usamos `class` como sintaxe suggar sobre o prototype.

    ```javascript
    import { LightningElement } from "lwc";

    export default class MeuComponente extends LightningElement {
      // Propriedades e métodos
    }
    ```

  - **Objeto (Object)**
    Um **objeto** é uma instância de uma classe, ele carrega os dados e comportamentos definidos pela classe.

    ```javascript
    @track produto = new Produto('Notebook', 4000);
    ```

  - **Encapsulamento (Encapsulation)**
    É o **princípio de esconder os detalhes** e expor apenas o que é necessário. Serve para proteger o estado interno do objeto e garantir controle sobre a manipulação. A partir de **ES2022**, usamos o **`#`** para indicar atributos **privados**.

    ```javascript
    class Conta {
      #saldo = 0;

      depositar(valor) {
        if (valor > 0) this.#saldo += valor;
      }

      get saldo() {
        return this.#saldo;
      }
    }
    ```

    No LWC não se usa o **`#`** (ainda não é suportado em todos os navegadores), mas sim **modificadores de acesso via convenção (`_`)**:

    ```javascript
    // arquivo JS
    let _interno = 'acesso restrito';

    // getter/setter públicos
    get dadoPublico() { return this._interno; }
    ```

  - **Abstração (Abstraction)**
    Uma abstração significa **ocultar a complexidade** e mostrar apenas o necessário para o uso externo. Ajuda a manter o código modular e reutilizável. No **LWC** é usado abstração a todo momento com:

    - **chamadas de método `@AuraEnabled`**
    - **classes auxiliares JS**
    - **serviços como `lightning/ui*` adaptam APIs**
      No caso do JS comum, podemos verificar outro tipo de abstração uma classe de **ApiService** onde passamos apenas um endpoint e dentro da classe ela chama uma `fetch`, no caso, quem usa a classe de API nao precisa saber como funciona o fetch. isso é a abstração.

  - **Herança (Inheritance)**
    A herança permite que uma **classe filha** receba automaticamente **propriedades** e **métodos** da classe pai. Evita repetição de código e promove estrutura hierárquica.

    ```javascript
    class Usuario {
      constructor(nome) {
        this.nome = nome;
      }

      saudacao() {
        return `Olá, ${this.nome}`;
      }
    }

    class Admin extends Usuario {
      deletarUsuario(usuario) {
        return `${this.nome} removeu ${usuario}`;
      }
    }
    ```

    No LWC todo componente herda de **`LightningElement`**

    ```javascript
    export default class MeuComp extends LightningElement {
      // está herdando métodos como this.dispatchEvent()
    }
    ```

  - **Polimorfismo (Polymorphism)**
    O polimorfismo permite que **várias classes implementem métodos com o mesmo nome**, mas com **comportamentos diferentes**. É a chave para adaptar uma lógica específica sem alterar o código base.

    ```javascript
    class Botao {
      acao() {
        return "Botão pressionado";
      }
    }

    class BotaoSalvar extends Botao {
      acao() {
        return "Salvando dados...";
      }
    }

    class BotaoCancelar extends Botao {
      acao() {
        return "Cancelando operação...";
      }
    }

    const botoes = [new BotaoSalvar(), new BotaoCancelar()];
    botoes.forEach((btn) => console.log(btn.acao()));
    ```

  - **Resumo**

    | Pilar          | JS Moderno                    | Em LWC                              |
    | -------------- | ----------------------------- | ----------------------------------- |
    | Classe         | `class MinhaClasse`           | `extends LightningElement`          |
    | Objeto         | `const x = new MinhaClasse()` | `@track produto = new Produto(...)` |
    | Encapsulamento | `#privado`, `get/set`         | `_interno`, `get nome()`            |
    | Abstração      | Métodos que escondem a lógica | `handleSubmit()`, chamadas a Apex   |
    | Herança        | `extends OutraClasse`         | `extends LightningElement`          |
    | Polimorfismo   | `sobrescrita de método`       | `renderedCallback()` customizado    |

  - **Getters And Setters**
    As classes JavaScript contam com dois métodos especiais: um com o prefixo [**get**](https://www.devmedia.com.br/javascript-getters-e-setters/41198) que tem a função de retornar um valor, e outro precedido pela palavra **set** que serve para atribuir um valor. Ambos funcionam como se fossem uma propriedade da classe. Podemos ver melhor no exemplo abaixo:

    ```javascript
    class Pessoa {
      constructor() {
        this.data = {};
      }

      cpfIsValid(value) {
        return /^\d\.\d\.\d\-\d$/.test(value);
      }

      get cpf() {
        // verifica se a propriedade não existe no atributo this.data da classe
        if (!this.data.hasOwnProperty("cpf")) {
          return undefined;
        }
        // retorna o valor da cpf
        return this.data.cpf;
      }

      set cpf(value) {
        if (!this.cpfIsValid(value)) {
          throw new Error("numero de cpf invalido");
        }

        this.data["cpf"] = value;
      }
    }
    ```

    Neste exemplo reescrevemos a classe criando um único atributo na classe chamado data na linha 3 onde definimos seu valor inicial como um objeto vazio. Este atributo tem como função armazenar propriedades que serão utilizadas na classe.

## Funções

Neste tópico será abordado tudo sobre funções. Funções são valores e podemos passar funções como parâmetros para outras funções, uma constante que recebe outra função ou até mesmo fazer encadeamento de funções como ja vimos anteriormente.
Para começar no mundo do **paradigma funcional** temos que conhecer sobre o termo **Imutabilidade** ou seja, a ideia da [imutabilidade](https://rfcosta85.medium.com/descobrindo-javascript-imutabilidade-a8a052be156c) é tornar nossos códigos mais seguros, no sentido de evitar grandes bugs, a imutabilidade junto com as funções puras, também nos permite ter códigos mais fáceis de serem testados e também reutilizados.

- ### Function Declaration vs Function Expression

  Uma **function declaration** é declarada a partir da key word **`function`**:

  ```javascript
  function bomDia() {
    console.log("Good Morning");
  }
  ```

  Uma **Function Expression** é declarada a partir de uma função anônima e armazenada em uma variável, mais comum em uma **`const`**:

  ```javascript
  const bomDia = function () {
    console.log("Good Morning");
  };
  ```

- ### Arrow Function

  Uma **arrow Function** é uma nova forma de declarar funções dentro do JavaScript que usa sempre uma **function Expression** para sua declaração. Isso acontece por conta de uma arrow function ser por padrão, sempre uma função sem nome.

  `const bomDia = () => console.log("Good Morning")`

  Perceba acima que o retorno é **implícito** ou seja, não é necessário o uso do `return`, para termos o uso do `return` a função **deve** ter um compo:

  ```javascript
  const bomDia = (name) => {
    return `Good Morning ${name}`;
  };
  ```

  Uma outra característica das arrows são em como o `this` se comporta dentro das arrows,a principal característica do this dentro de uma arrow function é que ele não tem seu próprio contexto de execução. Em vez disso, ele herda o valor de this do escopo onde a função foi definida (isso se chama lexical scoping).

  ```javascript
  function NormalFunction() {
    this.nome = "Alessandro";

    setTimeout(function () {
      console.log("Normal Function:", this.nome); // ❌ undefined
    }, 1000);
  }

  function ArrowFunction() {
    this.nome = "Alessandro";

    setTimeout(() => {
      console.log("Arrow Function:", this.nome); // ✅ "Alessandro"
    }, 1000);
  }
  ```

- ### Função Callback

  Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

  ```javascript
  function funcaoDeOrdemMaior(cb) {
    cb();
    console.log("Função de ordem maior invocada");
  }

  function meuCallback() {
    console.log("Callback invocado");
  }

  funcaoDeOrdemMaior(meuCallback);
  ```

  Um dos usos mais comuns das funções callbacks são nas requests para servidores, no caso existe a chamada de API e a função espera o evento de retorno para aí sim fazer algo.
  Outro exemplo de callback que deixa bem claro a tratativa de chamar uma outra função depois de um tempo, seria o setInterval, onde será passado por parâmetro uma função e um intervalo de tempo em milissegundos. Depois que esse tempo passar a função que foi passada por parâmetro será chamada.

  ```javascript
  setInterval(function () {
    console.log("Exec");
  }, 5000);
  ```

- ### Map - Reduce - Filter

  ![MapReduceFilter](https://www.lambda3.com.br/wp-content/uploads//2017/01/map-filter-reduce-in-emoji-1.png)

- ### Map

  O método **[Array.prototype.map() ou apenas map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)** invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. Sintaxe: `arr.map(callback[, thisArg])`. O Map sempre retorna uma lista de mesmo tamanho da lista de origem.
  Pontos importantes:

  - **Map não modifica o array original:**
    O map() não altera o array original – ele retorna um novo array com base na transformação.
  - **Sobre a função callback:**
    A função callback pode receber até 3 argumentos:
    `function callback(currentValue, index, array)`

  O método map() cria um novo array com os resultados da função callback aplicada a cada elemento do array original.
  Ele não modifica o array original e sempre retorna um novo array com o mesmo número de elementos.

  ```javascript
  const array1 = [1, 4, 9, 16];

  // Pass a function to map
  const map1 = array1.map((x) => x * 2);

  console.log(map1);
  // Expected output: Array [2, 8, 18, 32]
  ```

  [Map.js](./Functions/Map.js)

- ### Filter

  O método [Array.prototype.filter() ou apenas filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
  Diferente do método map o método **filter** retorna **um novo array** apenas como os elementos **que passaram no teste** do método callback, já o método callback deve obrigatoriamente retornar um boolean.
  O método **não altera** o array original, e o array resultante pode ter tamanho menor, ou até ser vazio.
  A função callback pode receber até 3 argumentos:
  `function callback(currentValue, index, array)`

  ```javascript
  const words = ["spray", "elite", "exuberant", "destruction", "present"];
  const result = words.filter((word) => word.length > 6);
  console.log(result); // Expected output: Array ["exuberant", "destruction", "present"]
  ```

  [Filter.js](./Functions/Filter.js)

- ### Reduce

  O método [Array.prototype.reduce() ou apenas reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) executa um método callback **reducer** para cada elemento do array, retornando **um único** valor de retorno.

  ```javascript
  const array1 = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log(sumWithInitial);
  // Expected output: 10
  ```

  A função reducer recebe **quatro** parâmetros:

  - Acumulador (acc)
  - Valor Atual (cur)
  - Index Atual (idx)
  - Array original (src)

  O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

  ```javascript
  array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])
  ```

  O método `reduce()` executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:
  acumulador

  - valor inicial (ou o valor do callback anterior),
    valorAtual
  - o valor do elemento atual
    index
  - o índice atual e
    array
  - o array onde a iteração está ocorrendo.

  A primeira vez que o callback é chamado, o **acumulador** e o **valorAtual** podem ter um de dois valores possíveis. Se o **valorInicial** tiver sido fornecido na chamada à função `reduce()`, então o **acumulador** será igual ao **valorInicial** e o **valorAtual** será igual ao primeiro valor no array. Caso nenhum **valorInicial** seja fornecido, acumulador será igual ao primeiro valor no array, e **valorAtual** será igual ao segundo.

## Funções Assíncronas

Em JavaScript, funções assíncronas (ou async functions) são uma forma moderna e mais legível de lidar com operações que levam tempo para serem concluídas, como requisições a servidores, leitura de arquivos ou timers. Essas funções ajudam a evitar o chamado "**callback hell**" e tornam o código assíncrono mais fácil de entender e manter.
A programação assíncrona é essencial porque o JavaScript é uma linguagem de execução single-threaded, ou seja, só consegue executar uma tarefa por vez. Com funções assíncronas, é possível iniciar uma tarefa demorada e continuar executando outras operações enquanto essa tarefa é concluída em segundo plano.

**O que é "callback hell"?**
Callback Hell (ou “inferno dos callbacks”) é um problema comum em JavaScript quando você tem muitos callbacks aninhados uns dentro dos outros, criando um código difícil de ler, manter e debugar.
Isso acontece porque JavaScript usa muito callbacks para lidar com operações assíncronas (como ler arquivos, fazer requisições ou usar setTimeout). Quando uma função depende do resultado da outra, você acaba encadeando várias funções de forma aninhada.

```javascript
pegarUsuario(1, function (usuario) {
  pegarPosts(usuario.id, function (posts) {
    pegarComentarios(posts[0].id, function (comentarios) {
      console.log(comentarios);
    });
  });
});
```

- ### Promise

  O [promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) é uma resumidamente uma promessa, ou seja, algo que será resolvido no futuro. Em termos técnicos, uma **Promise** é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.
  ![promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

  ```javascript
  const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  minhaPromise
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handleRejectedC);
  ```

  Por padrão uma promise recebe uma função callback que tem por parâmetro dois valores o **resolve** e o **reject**:

  - resolve(valor): indica que a operação foi bem-sucedida e retorna o valor desejado.
  - reject(erro): indica que a operação falhou e retorna o erro.

  Pense em uma promise como um pedido de pizza:

  1. Voce faz o pedido (Inicia a promise)
  2. A pizzaria pode:

     - Entregar a pizza (`resolve(pizza)`)
     - Dizer que algo deu errado e a pizza não poderá ser entregue (`reject('Acabou o queijo')`)

  3. Voce reage com:

  - `.then(pizza => comer(pizza))`
  - `.catch(erro => chorar(erro))`

- ### Async/Await

  Quando uma função assíncrona é chamada, ela retorna uma `Promise`. Quando a função assíncrona retorna um **valor**, a `Promise` será resolvida com o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.
  Uma função assíncrona pode conter uma expressão `await`, que **pausa a execução da função assíncrona e espera pela resolução da Promise passada**, e depois retoma a execução da função assíncrona e retorna o valor resolvido.
  A proposta das funções async/await é de simplificar o uso de forma síncrona das Promises e executar alguns procedimentos em um grupo de Promises. Assim como Promises são similares a callbacks estruturados, funções async/await são similares à junção de generators com Promises.

  ```javascript
  async function HelloAfterThreeSeconds() {
    console.log("After");
    await setTimeout(() => console.log("HelloWord"), 3000);
    console.log("Before");
  }

  HelloAfterThreeSeconds();
  ```

## Princípios da Programação Funcional

Neste capítulo vamos olhar a fundo os principais conceitos da programação funcional, levando em consideração que estes princípios são levados para a toda a carreira como programador em sí, ou seja, quando formos ler um livro de algoritmos ou quando for necessário usar a programação funcional dentro da POO por exemplo.

### Função pura

Antes de descrever o que é uma função pura, temos que deixar claro que: **é impossível a criação de um app utilizando somente funções puras.** Ou seja, sempre teremos que utilizar funções impuras em qualquer programa que vamos criar, porém, é recomendado sempre que possível que optemos pela utilização das funções puras.

**Função Pura (Pure function)**:

Uma [Função Pura](https://medium.com/@allangrds/o-que-%C3%A9-uma-fun%C3%A7%C3%A3o-pura-em-javascript-2b34edcad8e2) é uma função onde o valor de retorno é determinado apenas por seus valores de entrada, sem efeitos colaterais observáveis.

![pureFunction](https://miro.medium.com/v2/resize:fit:720/format:webp/1*CESrhfRlu7E1aYljbEvdbw.png)

Ou seja, dado o seguinte código:

```javascript
const add = (x, y) => x + y;
add(2, 4); // 6
```

O valor de retorno será sempre baseado nos parâmetros enviados, independentemente de onde/quando for chamado. Se você passar 2 e 4, sempre receberá 6.Nada afeta o resultado. Vamos para o exemplo prático em: [PureFunction.js](./Functional/PureFunctions.js)
