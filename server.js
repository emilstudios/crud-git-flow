const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// "Base de datos" en memoria
let tareas = [];
let siguienteId = 1;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// CREATE
app.post('/api/tareas', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'El titulo es obligatorio' });
  }
  const tarea = { id: siguienteId++, titulo, completada: false };
  tareas.push(tarea);
  res.status(201).json(tarea);
});
// READ (todas)
app.get('/api/tareas', (req, res) => {
  res.json(tareas);
});

// READ (una por id)
app.get('/api/tareas/:id', (req, res) => {
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(tarea);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});