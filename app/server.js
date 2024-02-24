const express = require('express');
const app = express();
const port = 3001;
const alunosController = require("./controllers/alunosController.js");
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin:"*"
}))
app.get('/aluno/:id', alunosController.getAluno)

app.post('/aluno/', alunosController.postAluno)

app.delete('/aluno/:id', alunosController.deleteAluno)

app.listen(port)
