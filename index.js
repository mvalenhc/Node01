const  express = require('express');
const dotenv = require('dotenv')
const server = express();
const colors = require('colors')
dotenv.config()

const port = process.env.PORT

server.get('/', (req, res)=>{
    res.send('hola  :)')
    
})

server.listen(port, ()=>{
    console.log(`Estoy en el puerto ${port}`.rainbow.bgRed);
})