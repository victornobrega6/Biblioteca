import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Permitir requisições de qualquer origem
app.use(express.json());

// Suas rotas
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

app.use(userRoutes);
app.use(authRoutes);
app.use(bookRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});