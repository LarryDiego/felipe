import express from 'express';
import { UserController } from './controllers/UserController.js';

const app = express();
const port = 3000;

app.use(express.json());

const userController = new UserController();

app.get('/', (req, res) => {
  userController.welcome(req, res);
});

app.post('/users', (req, res) => {
  userController.createUser(req, res);
});

app.get('/users', (req, res) => {
  userController.getAllUsers(req, res);
});

app.get('/users/:id', (req, res) => {
  userController.getUserById(req, res);
});

app.delete('/users/:id', (req, res) => {
  userController.deleteUserById(req, res);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
