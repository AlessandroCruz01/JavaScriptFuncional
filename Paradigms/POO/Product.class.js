class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  show() {
    return `${this.name} custa R$${this.price}`;
  }
}
