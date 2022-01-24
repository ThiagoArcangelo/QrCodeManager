const dataParams = require("../models/Params");
const { v4 : uuidV4 } = require('uuid');
const Params = require("../models/Params");

// Listagem de URL

exports.get = async (req, res) => {
  const list = await dataParams.distinct('adress');

  return res.status(200).json(list);
};

// Rota prar Criar novo Projeto

exports.post = async (req, res) => {
  const { name, adress, password } = req.body;

  if (!adress) {
    return res.status(422).json({ message: "Digite o endereço de acesso" });
  }

  if (!password) {
    return res.status(422).json({ message: "A senha é obrigatória." });
  }

  const adressExists = await dataParams.findOne({ adress: adress });

  if (adressExists) {
    return res
      .status(500)
      .json("A url deste projeto ja esta registrado. Ultilize outra url");s
  }

  const params = new dataParams({
    name,
    adress,
    password,
    id: Params.id
  });

  try {
    await params.save();

    res.status(201).json({ message: "Link criado com sucesso" });
  } catch (error) {
    console.log(error, "Não foi possível salvar o arquivo no banco de dados.");

    res.status(500).json(error, {
      message: "Não foi possível salvar o arquivo no banco de dados.",
    });
  }
};
