const express = require('express');
const app = express();

// Middleware necesario para que el servidor pueda procesar datos en formato JSON
app.use(express.json());

// 1. Ruta raíz (GET)
app.get('/', (req, res) => {
  res.send('Servidor activo');
  });

  // 2. Ruta de saludo comunitario (GET)
  app.get('/saludo', (req, res) => {
    res.send('Hola comunidad');
    });

    // 3. Ruta dinámica con parámetro de nombre (GET)
    app.get('/mensaje/:nombre', (req, res) => {
      const nombre = req.params.nombre;
        res.send('Hola ' + nombre);
        });

        // 4. Ruta para enviar reportes comunitarios (POST)
        app.post('/reporte', (req, res) => {
          const mensaje = req.body.mensaje;
            res.json({
                estado: "Reporte recibido",
                    mensaje: mensaje
                      });
                      });

                      // Inicialización del servidor en el puerto 3000
                      app.listen(3000, () => {
                        console.log('Servidor ejecutándose en puerto 3000');
                        });
                        