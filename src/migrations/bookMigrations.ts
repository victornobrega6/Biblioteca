import pool from '../config/database';

// BD Books
const createBookTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "books" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createBookTable().then(() => process.exit(0));