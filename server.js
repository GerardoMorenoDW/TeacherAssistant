const express = require('express');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API Funcionando");
});

app.get('/users', async (req, res) => {
    try{
        const usuarios = await pool.query('SELECT * FROM users');
        res.json(usuarios.rows)
    }catch(error){;
        console.error(error);
        res.status(500).json({ message: "Error al obtener usuarios" });
    }
})

app.post('/createuser', (req, res) => {
    const { id, nombre } = req.body;

    if (!id || !nombre) {
        return res.status(400).json({ "message": "ID y Nombre son requeridos" });
    }

    const userExist = users.find(u => u.id == id);
    if (userExist) {
        return res.status(401).json({ "message": "Usuario con ese ID ya existe" });
    }

    users.push({ id, nombre });
    res.status(201).json({ "message": "Usuario creado correctamente", "usuario": nombre});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))