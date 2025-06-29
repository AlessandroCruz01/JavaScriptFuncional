import { User } from "./User.class.js";

class Admin extends User {
  constructor(userName) {
    super(userName);
  }

  deleteUser(user) {
    return `${this.nome} deletou ${user}`;
  }
}

const currentUser = new Admin("Mauricio");
console.log(currentUser.deleteUser("Alessandro"));
