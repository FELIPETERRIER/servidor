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
                nome: req.body.usuario_nome
            },
            status: "Aluno criado"
        }
    );
}

exports.deleteAluno = (req, res) => {
    res.status(201).json(
        {
            dados: {
                nome: req.body.usuario_nome
            },
            status: "Aluno excluído!"
        }
    );
}
