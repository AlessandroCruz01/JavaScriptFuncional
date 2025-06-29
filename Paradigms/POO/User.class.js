export class User {
  constructor(nome) {
    this.nome = nome;
  }

  hello() {
    return `Olá, ${this.nome}`;
  }
}
