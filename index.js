import express from 'express';
import { nanoid } from 'nanoid';

const app = express();
const port = 3000;

const users = [
  {
    id: '15',
    name: 'Felipe',
    email: 'felipe@gmail.com',
    password: '123',
  },
  {
    id: '10',
    name: 'Larry',
    email: 'larry@gmail.com',
    password: '123',
  },
  {
    id: '50',
    name: 'Nicole',
    email: 'nicole@gmail.com',
    password: '123',
  },
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: `Hello ${req.body.name}! Welcome to my REST API!`,
  });
});

app.post('/users', (req, res) => {
  let user = {};
  user = { id: nanoid(), ...req.body };
  users.push(user);
  res.status(201).json({
    message: `Usuário criado com sucesso!`,
    user,
  });
  return;
});

app.get('/users', (req, res) => {
  res.json({ users });
  return;
});

app.get('/users/:id', (req, res) => {
  const userExists = users.find((user) => user.id === req.params.id);
  if (userExists) {
    return res.json({
      message: `User found with ID: ${req.params.id}`,
      user: userExists,
    });
  }
  return res.json({
    message: 'User not found!',
  });
});

app.delete('/users/:id', (req, res) => {
  const userExists = users.findIndex((user) => user.id == req.params.id);
  if (userExists > -1) {
    users.splice(userExists, 1);
    return res.json({
      message: `Usuário com o ID: ${req.params.id} deletado com sucesso!`,
    });
  }
  return res.json({ message: 'Usuário não encontrado' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
