# CRUD de Tareas con Git Flow

API REST para gestionar tareas, desarrollada con Node.js y Express. Proyecto de la Tarea 3, que aplica Git Flow con las ramas `main`, `qa`, `dev` y `feature/*`.

## Tecnologías

- Node.js
- Express

## Instalación

```bash
git clone https://github.com/emilstudios/crud-git-flow.git
cd crud-git-flow
npm install
node server.js
```

El servidor corre en `http://localhost:3000`.

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | /api/health | Verifica que el servidor funciona |
| POST | /api/tareas | Crea una tarea |
| GET | /api/tareas | Lista todas las tareas |
| GET | /api/tareas/:id | Obtiene una tarea por id |
| PUT | /api/tareas/:id | Actualiza una tarea |
| DELETE | /api/tareas/:id | Elimina una tarea |

## Ejemplo

```json
{ "titulo": "Estudiar Git" }
```