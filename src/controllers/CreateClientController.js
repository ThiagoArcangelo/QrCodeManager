const Client = require("../models/Client");

// Criar novo cliente(empresa) - Admin
exports.create = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório." });
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória." });
    }

    const client = await Client.create({
      name,
      password,
    });

    await client.save();

    res.status(201).json("Cliente cadastrado com sucesso");
  } catch (error) {
    res
      .status(400)
      .json({ erro: error, message: "Erro ao cadastrar o cliente" });
    console.log(error);
  }
};

// Listar clientes(empresa) - Admin
exports.get = async (req, res) => {
  const listClient = await Client.find({});

  return res.json(listClient);
};

// Atualização de Cadastro
exports.update = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const getUpdate = await Client.findByIdAndUpdate(id, req.body);

    res.status(200).json(getUpdate);
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

// Remove cadastro de Cliente
exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const removeClient = await Client.findByIdAndRemove(id);

    if (!removeClient) {
      res.status(200).json("Cliente removido");
    }
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};
