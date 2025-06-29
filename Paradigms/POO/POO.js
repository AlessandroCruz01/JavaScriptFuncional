class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  show() {
    return `${this.name} custa R$${this.price}`;
  }
}

const productOne = new Product("Notebook", 400);
console.log(productOne.show);

class Account {
  #amount = 0;

  deposit(value) {
    if (value > 0) this.#amount += value;
  }

  get saldo() {
    return this.#amount;
  }
}

const firstAccount = new Account();
firstAccount.deposit(5);
console.log(firstAccount.saldo);

class ApiService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getDados() {
    const resp = await fetch(this.endpoint);
    return await resp.json();
  }
}
