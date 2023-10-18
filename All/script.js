const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Utwórz połączenie z bazą danych MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'username', // Twój użytkownik bazy danych
  password: 'password', // Twoje hasło bazy danych
  database: 'database_name' // Nazwa twojej bazy danych
});

// Nawiąż połączenie z bazą danych
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Połączono z bazą danych MySQL');
});

// Obsłuż żądanie POST z formularza rejestracyjnego 
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  const user = { username, password, email };

  // Wstaw dane użytkownika do bazy danych
  db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Dodano użytkownika do bazy danych');
    res.send('Rejestracja zakończona sukcesem');
  });
});

// Uruchom serwer na zadanym porcie
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});