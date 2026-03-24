const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'clase10.html'));
});

app.get('/saludo', (req, res) => {
  res.send('Hola soy Darien, Saludos');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});