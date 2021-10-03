/**
 * arquivo: config/database.js
 * descrição: aqruivo responsável pelas 'connectrionStrings' (Cosmo DB & PostgreSQL)
 * data:30/09/2021
 * author: Felipe Gabriel
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//==> conexão com a base de dados

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err)
    process.exit(-1);
})

pool.on('connect', ()=>{
    console.log('Base de Dados conectado com sucesso!')
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}