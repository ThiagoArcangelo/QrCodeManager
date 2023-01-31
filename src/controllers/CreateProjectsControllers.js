const Projects = require("../models/Projects");
// const jwt = require("jsonwebtoken");

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

    res.status(201).send({ message: "Projeto criado com sucesso" });
  } catch (error) {
    res.status(400).send(error, {
      message: "Não foi possível salvar o arquivo no banco de dados.",
    });
  }
};

// Listagem de URL - View => Admin
exports.get = async (req, res) => {
  try {
    const list = await Projects.find();
    return res.status(200).json(list);
  } catch (error) {
    res.status(400).json({
      error: console.log(error),
      message: "Erro ao processar sua requisição",
    });
  }
};

// Listar Url - View => Parametro para permissão
exports.getById = async (req, res) => {
  const { id } = req.params; // teste de rota
  try {
    const listId = await Projects.findById(id);
    return res.status(200).json(listId);
  } catch (error) {
    console.log("Erro ao processar sua requisição", error);
  }
};

// Listar Url para o formulario de edição
exports.getPasswordById = async (req, res) => {
  // const { id } = req.params; // teste de rota
  try {
    const listId = await Projects.findById(req.id);
    return res
      .status(200)
      .json({ message: console.log("Dados do projeto: "), Project: listId });
    // res.redirect("https://www.google.com");
    console.log(listId);
  } catch (error) {
    console.log("Erro ao processar sua requisição", error);
  }
};

// Criar novo Projeto - Admin

// Atualização de senha do Projeto
exports.update = (req, res) => {
  const { id } = req.params;
  const { name, title, adress, key } = req.body;
  const options = { new: true };

  const updateProject = Projects.findByIdAndUpdate(
    id,
    { title: title, name: name, adress: adress, key: key },
    options
  )
    .then((response) => res.send(response.data))
    // .then(() => res.send(updateProject.data))
    .catch((error) => {
      console.log({
        message: "Não foi possível processar sua requisição",
        error,
      });
    });
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
