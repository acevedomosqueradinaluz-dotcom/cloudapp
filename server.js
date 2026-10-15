const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static('Opiniones'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Opiniones', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
});