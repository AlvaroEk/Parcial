const express = require('express');
const app = express();

dotenv = require('dotenv');

app.use(express.json());

const router = require('./routes/routes');
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
