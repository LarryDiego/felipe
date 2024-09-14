import { UserRepository } from '../repositories/UserRepository.js';
import { nanoid } from 'nanoid';

export class UserService {
  userRepository = new UserRepository();

  getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  createUser(userData) {
    const user = { id: nanoid(), ...userData };
    return this.userRepository.createUser(user);
  }

  getUserByiD(id) {
    return this.userRepository.getUserById(id);
  }

  deleteUserById(id) {
    return this.userRepository.deleteUserById(id);
  }
}
