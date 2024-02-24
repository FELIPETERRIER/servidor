exports.getAluno = (req, res) => {
    res.status(200).json(
        {
            dados: {
                id: req.params.id
            },
            status: "Aluno pesquisado"
        }
    );
}

exports.postAluno = (req, res) => {
    res.status(201).json(
        {
            dados: {
                nome: req.body
            },
            status: "Aluno criado"
        }
    );
}
exports.deleteAluno = (req, res) => {
    console.log("passei aqui")
    console.log(req.params.id)
    res.status(200).json(
        {
            dados: {
                nome: req.params
            },
            status: "Aluno excluído!"
        }
    );
}
