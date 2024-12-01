document.getElementById('formLivros').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('titulo').value;
    const author = document.getElementById('autor').value;
    const price = document.getElementById('preco').value;

    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, price }),
      });

      if (response.ok) {
        alert('Livro cadastrado com sucesso!');
      } else {
        throw new Error();
      }
    } catch {
      alert('Tente cadastrar o livro novamente');
    }
  });

document.getElementById('formLogin').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert('Bem vindo!');
        window.location.href = 'registroLivros.html';
      } else {
        throw new Error();
      }
    } catch {
      alert('Usuário ou Senha incorretos, tente novamente');
    }
  });

document.getElementById('formRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert('Registro realizado com sucesso!');
        window.location.href = 'login.html';
      } else {
        throw new Error();
      }
    } catch {
      alert('Tente novamente se registrar');
    }
  });

