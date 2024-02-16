const express = require('express');
const app = express();
const port = 3001;
const alunosController = require("./controllers/alunosController.js")

app.use(express.urlencoded({ extended: true }))

app.get('/aluno/:id', alunosController.getAluno)

app.post('/aluno/', alunosController.postAluno)

app.delete('/aluno/:', alunosController.deleteAluno)

app.listen(port)
