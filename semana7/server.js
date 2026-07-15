// Importar Express
const express = require('express');
const app = express();

// Middleware para leer JSON en las peticiones
app.use(express.json());

// Lista en memoria para guardar los reportes
let reportes = [];

// Ruta GET para consultar todos los reportes
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST para registrar un nuevo reporte
app.post('/reportes', (req, res) => {
  const nuevoReporte = req.body;
  reportes.push(nuevoReporte);
  res.status(201).json({ mensaje: 'Reporte agregado con éxito', reporte: nuevoReporte });
});

// Servidor escuchando en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
