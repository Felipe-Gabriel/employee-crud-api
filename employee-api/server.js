/**
 * arquivo: server.js
 * descrição: aqruivo responsável por toda a configuração e execucação do Back-Ed('Employee')
 * data:30/09/2021
 * author: Felipe Gabriel
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Aplicação sendo executada na porta:', port);
})
