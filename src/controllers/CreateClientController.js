const Client = require("../models/Client");
const { v4 : uuidV4} = require('uuid');

const uuid = uuidV4();

// Criar novo cliente

exports.create = async (req, res) => {
    const { name, password } = req.body  

    if(!name) {
        res.status(422).json({message: "O nome é obrigatório."})
    }

    if(!password) {
        res.status(422).json({message: "A senha é obrigatória."})
    }

    const client = new Client({     
        name, 
        password,
    });

 
  try {
      await client.save();

      res.status(201).json('Cliente cadastrado com sucesso');

  } catch (error) {
      res.status(400).json({erro: error, message: 'Erro ao cadastrar o cliente'});
      console.log(error)
  }
};

// Listar clientes

exports.get = async (req, res) => {
    const listClient = await  Client.find({});

    return res.json(listClient);
}

// Deletar clientes
exports.delete = async (req, res) => {
    
}