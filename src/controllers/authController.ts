import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

const authService = new AuthService();

<<<<<<< HEAD
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
=======
// Registro de usuário
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

>>>>>>> dc75fa3 (refactor: mudança de código)
  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err) {
<<<<<<< HEAD
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.loginUser(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
=======
    res.status(400).json({ error: "erro 400" });
  }
};

// Login de usuário
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await authService.loginUser(email, password);
    res.status(200).json({ message: 'Login bem-sucedido', user });
  } catch (err) {
    res.status(401).json({ error: "erro 401" });
>>>>>>> dc75fa3 (refactor: mudança de código)
  }
};