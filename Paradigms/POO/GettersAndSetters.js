class getAndSet {
  #name;
  #yearsOld;
  #region;

  constructor(name, yearsOld, region) {
    this.#name = name;
    this.#yearsOld = yearsOld;
    this.#region = region;
  }

  get name() {
    return this.#name;
  }

  get yearsOld() {
    return this.#yearsOld;
  }

  get region() {
    return this.#region;
  }

  set name(newName) {
    this.#name = newName;
  }
}

const getClass = new getAndSet("Ale", 26, "Acre");
console.log(getClass.name);
console.log(getClass.yearsOld);
getClass.name = "Alessandro";
console.log(getClass.name);
