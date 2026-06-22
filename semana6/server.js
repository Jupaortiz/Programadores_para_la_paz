const express = require('express');
const app = express();

// Middleware obligatorio para procesar y entender cuerpos de peticiones en formato JSON
app.use(express.json());

// 1. Ruta POST: Registro general de usuarios
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;

      res.json({
          estado: "Datos recibidos",
              nombre: nombre,
                  mensaje: mensaje
                    });
                    });

                    // 2. Ruta POST: Simulación de reporte o incidencia comunitaria
                    app.post('/incidencia', (req, res) => {
                      const tipo = req.body.tipo;
                        const descripcion = req.body.descripcion;

                          res.json({
                              mensaje: "Incidencia registrada",
                                  tipo: tipo,
                                      descripcion: descripcion
                                        });
                                        });

                                        // Inicialización del servidor en el puerto 3000
                                        app.listen(3000, () => {
                                          console.log('Servidor ejecutándose en puerto 3000');
                                          });
                                          