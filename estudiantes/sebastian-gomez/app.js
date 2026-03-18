const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'clase10.html'));
});

app.get('/saludo', (req, res) => {
    res.sendFile(path.join(__dirname, 'saludo.html'));
});

app.get('/prueba', (req, res) => {
    res.sendFile(path.join(__dirname, 'prueba.html'));
});


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});