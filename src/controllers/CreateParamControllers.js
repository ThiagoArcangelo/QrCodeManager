const Params = require("../models/Params");
const { v4: uuidV4 } = require('uuid');

const uuid = uuidV4();

// Listagem de URL

exports.get = async (req, res) => {
  const list = await Params.distinct("adress");

  return res.status(200).json(list);
};

// Rota prar Criar novo Projeto

exports.create = async (req, res) => {
  
  const { name, adress, password } = req.body;

  if (!adress) {
    return res.status(422).json({ message: "Digite o endereço de acesso" });
  }

  if (!password) {
    return res.status(422).json({ message: "A senha é obrigatória." });
  }

  const adressExists = await Params.findOne({adress});

  if (adressExists) {
    return res
      .status(500)
      .json({
        message: "A url deste projeto ja esta registrado. Ultilize outra url",
      });
  }

  const params = await new Params({
    name,
    adress,
    password,
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

