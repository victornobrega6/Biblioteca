import { Pool } from 'pg';
import pool from '../config/database';
import { Book } from '../models/bookModel';

export class BookRepository {
  private pool: Pool = pool;

  async getAllBooks(): Promise<Book[]> {
<<<<<<< HEAD
    const { rows } = await this.pool.query('SELECT * FROM books');
=======
    const { rows } = await this.pool.query('SELECT id, title, author, price FROM books');
>>>>>>> dc75fa3 (refactor: mudança de código)
    return rows;
  }

  async addBook(title: string, author: string, price: number): Promise<Book> {
    const query = 'INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await this.pool.query(query, [title, author, price]);
    return rows[0];
  }
}