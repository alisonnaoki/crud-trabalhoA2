const e = require('express')
const express = require('express')
const app = express()

app.use(express.json())

const mongoose = require('mongoose')
require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
    .then(()=>{
        console.log("conectado ao banco de dados")
    })
    .catch(erro =>{
        console.log("Erro ao conectar ao banco de dados")
    })

    app.listen(3000, () =>{
        console.log("Aplicação rodando -> http://localhost:3000")
    })