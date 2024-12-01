import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { hashpassword, comparePassword } from '../helpers/hashHelper';

const userService = new UserService();

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {

    const passwordHash = hashpassword(password);
    const user = await userService.createUser(name, email, passwordHash);
    res.status(201).json(user);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};