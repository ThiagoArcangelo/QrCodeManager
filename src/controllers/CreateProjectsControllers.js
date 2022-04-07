const Projects = require("../models/Projects");
// const jwt = require('jsonwebtoken');

// Listagem de URL - View => Admin
exports.get = async (req, res) => {
  const list = await Projects.find();

  return res.status(200).json(list);
};

// Listar Url - View => Parametro para permissãoa
exports.getById =  (req, res) => {
  const { id } = req.params;
 

  const getParams = Projects.findById(id, (err, content) => {
    if (err) {
      res.status(500).json({ erro: err });
    } 
    else if (content.adress) {    
    return res.status(200).json(content.adress); 
    }
  });
};

// Criar novo Projeto - Admin
exports.create = async (req, res) => {
  try {
    const { name, title, adress, key } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Digite o nome da empresa" });
    }

    if (!title) {
      return res.status(400).json({ message: "Digite um nome para o projeto" });
    }

    if (!adress) {
      return res.status(400).json({ message: "Digite o endereço de acesso" });
    }

    if (!key) {
      return res.status(400).json({ message: "A senha é obrigatória." });
    }

    const urlExists = await Params.findOne({ adress });

    if (urlExists) {
      return res.status(500).json({
        message: "A url deste projeto ja esta registrado. Ultilize outra url",
      });
    }

    const params = await Projects.create({
      name,
      title,
      adress,
      key,
    });

    await params.save();

    res.status(201).json({ message: "Link criado com sucesso" });

    // return params.adress;
  } catch (error) {
    console.log(error, "Não foi possível salvar o arquivo no banco de dados.");

    res.status(400).json(error, {
      message: "Não foi possível salvar o arquivo no banco de dados.",
    });
  }
};

// Atualização de senha do Projeto
exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const updateProject = await Projects.findByIdAndUpdate(id, req.body);

    res.status(200).json(updateProject);
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const paramsExists = await Params.findByIdAndRemove(id);

    if (!paramsExists) {
      res.status(200).json("Cliente removido");
    }
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

exports.verifyKey = async (req, res) => {
  const { id } = req.params;
  const { key } = req.body;

  const keyExists = await Projects.findOne({ key });

  if(!key) {
    res.status(400).send({error: "Erro ao processar sua requisição."});
  }

  res.render('/projects/:id');
}