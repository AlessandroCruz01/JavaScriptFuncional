class Account {
  #amount = 0;

  deposit(value) {
    if (value > 0) this.#amount += value;
  }

  get saldo() {
    return this.#amount;
  }
}
