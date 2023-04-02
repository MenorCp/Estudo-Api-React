//Configuração da .ENV
import 'dotenv/config';

//Dependencias
import cors from 'cors';
import express from 'express';

//Variavel constante (Servidor)
const server = express();
server.use(cors());

// Requisição GET
server.get('/ping', (req, resp) => {
    resp.send('pong')
})

//Requisição com um parametro, calculando o dobro.
server.get('/dobro/:numero', (req, resp) => {
    let numero = req.params.numero;
    let dobro = numero * 2;
    resp.send(String(dobro));
})

server.listen(process.env.PORT,
    () => console.log(`Porta online ${process.env.PORT}`));