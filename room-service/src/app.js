const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/roomRoutes');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas para las API REST
app.use('/rooms', roomRoutes);

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.static(path.join(__dirname, 'frontend/public')));


// Configurar el motor de vistas (HTML en este caso)
app.engine('html', require('ejs').renderFile); // Usar ejs para renderizar archivos html
app.set('view engine', 'html'); // Configurar el motor de vistas como 'html'

// Establecer el directorio de vistas
app.set('views', path.join(__dirname, 'frontend/views'));

// Ruta principal del frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views/index.html')); 
});

module.exports = app;
