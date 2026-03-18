const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'clase10.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'saludo.html'));
});

app.get('/nombre', (req, res) => {
    res.send('Soy NOMBRE');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

