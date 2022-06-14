const Projects = require("../models/Projects");
const jwt = require("jsonwebtoken");

exports.create = async (req, res) => {
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

  try {
    const urlExists = await Projects.findOne({ adress });

    if (urlExists) {
      return res.status(400).json({
        message: "A url deste projeto ja esta registrada. Ultilize outra url",
      });
    }

    const params = Projects.create({
      name,
      title,
      adress,
      key,
    });

    // await params.save();

    res.status(201).send({ message: "Link criado com sucesso" });
  } catch (error) {
    res.status(400).send(error, {
      message: "Não foi possível salvar o arquivo no banco de dados.",
    });
  }
};

// Listagem de URL - View => Admin
exports.get = async (req, res) => {
  const list = await Projects.find();

  return res.status(200).json(list);
};

// Listar Url - View => Parametro para permissão
exports.getById = async (req, res) => {
  const { id } = req.id;

  // res.status(200).send(JSON.stringify(id));
  res.status(200).json(id);
};

// Criar novo Projeto - Admin

// Atualização de senha do Projeto
exports.update = async (req, res) => {
  const { id } = req.params;
  const contentAll = req.body;
  const options = { new: true };

  try {
    const updateProject = await Projects.findByIdAndUpdate(
      id,
      contentAll,
      options
    );

    res.status(200).send(updateProject);
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const paramsExists = await Projects.findByIdAndRemove(id);

    if (!paramsExists) {
      res.status(200).json("Cliente removido");
    }
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

exports.validateKey = (req, res) => {
  const { key } = req.body;

  try {
    if (!key) {
      res.status(400).json({ message: "Digite a chave de acesso" });
    }

    res.send(key);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Sua requisição não foi processada." });
  }
};
