import { UserService } from '../services/UserService.js';

export class UserController {
  userService = new UserService();

  welcome(req, res) {
    res.json({
      message: `Olá ${req.body.name}! Bem-vindo a minha API REST!`,
    });
  }

  getAllUsers(_req, res) {
    const users = this.userService.getAllUsers();
    res.json({ users });
  }

  createUser(req, res) {
    const user = this.userService.createUser(req.body);
    res.status(201).json({
      message: 'Usuário criado com sucesso!',
      user: user,
    });
  }

  getUserById(req, res) {
    const userExists = this.userService.getUserByiD(req.params.id);
    if (userExists) {
      return res.json({
        message: `Usuário encontrado com ID: ${req.params.id}`,
        user: userExists,
      });
    }
    return res.json({
      message: 'Usuário não encontrado!',
    });
  }

  deleteUserById(req, res) {
    const userExists = this.userService.deleteUserById(req.params.id);
    if (userExists) {
      return res.json({
        message: `Usuário com o ID: ${req.params.id} deletado com sucesso!`,
      });
    }
    return res.json({ message: 'Usuário não encontrado' });
  }
}
