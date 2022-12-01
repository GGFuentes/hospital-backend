require('dotenv').config();

const express = require('express');
const {dbConnection} = require('./database/config');

var cors = require('cors')

const app = express();

app.use(cors())


//base de datos
dbConnection();
//rutas
app.get('/', (req, res) => {
res.status(400).json({ok: true, msg:'Todo OK'});
})

app.listen(process.env.PORT,() => {console.log('servidor en puerto '+ process.env.PORT)});