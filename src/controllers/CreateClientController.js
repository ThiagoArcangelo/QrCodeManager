const Client = require("../models/Client");
const uuid = require("uuid");

const uuidV4 = uuid.v4();

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
      id: uuidV4,
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

// Atualizar clientes(empresas) - Admin                      
exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, password } = req.body;

    const clientUpdate = await Client.findByIdAndUpdate({
      name,
      password,
    });

    await clientUpdate.save(id);

    res.status(200).send({ message: "Dados atualizado com sucesso" });
  } catch (error) {
    res.status(400).send({ message: "Não foi possível atualizar os dados" });
  }
}

// Deletar clientes(empresas) - Admin
exports.remove = async (req, res, next) => {
  try {
    await Client.findByIdAndRemove(req.params.id);

    return res.send();
  } catch (error) {
    res.status(400).send({ erroe: "Error deleting client" });
  }
};
