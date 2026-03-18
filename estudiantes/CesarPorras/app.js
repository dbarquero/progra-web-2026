const express = require('express');  //import del express
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'clase10.html'));
});
//cada app.get es una ruta, URL. En este caso estan quemados, no con un controller
app.get('/saludo', (req, res) => {
  res.send('Hola estudiante 👋');
});

app.get('/nombre', (req, res) => {
  res.send('Hola soy Cesar');
});

app.listen(3000, () => {  //donde se levanta el servidor
  console.log('Servidor corriendo en http://localhost:3000');
});

