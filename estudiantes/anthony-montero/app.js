const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/saludo', (req, res) => {
  res.send('Hola estudiante 👋');//se puede cambiar por un directorio/archivo como la raiz / - ver ejemplo de arriba en linea 5
});

app.get('/nombre', (req, res) => {
  res.sendFile(path.join(__dirname, 'anthony.html'));
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});