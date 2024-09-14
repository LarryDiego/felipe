import { db } from '../db/users.js';

export class UserRepository {
  getAllUsers() {
    return db.users;
  }

  createUser(user) {
    db.users.push(user);
    return user;
  }

  getUserById(id) {
    return db.users.find((user) => user.id === id);
  }

  deleteUserById(id) {
    const userExistsIndex = db.users.findIndex((user) => user.id == id);
    if (userExistsIndex > -1) {
      db.users.splice(userExistsIndex, 1);
      return true;
    }
    return false;
  }
}
