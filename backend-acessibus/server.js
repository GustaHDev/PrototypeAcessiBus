require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./api/routes/UserRoutes');

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})